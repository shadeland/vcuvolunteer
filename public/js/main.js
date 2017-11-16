app = {}; 
app.serverAdress = '//localhost:3000/';
app.init = function (){
	$('#selectMajor').dropdown({
		apiSettings: {
      // this url parses query server side and returns filtered results
      		url: `${app.serverAdress}student/profile/majors`,
      		beforeXHR: (xhr) => {
               // Set Custom Headers here 
              console.log("reqqqq");
            },
            onResponse: (response) => {
              // Modify your JSON response into the format SUI wants
              return response;
            }

  		},

	});

	$('#selectYear').dropdown({});
};

$(document).ready(function(){
	app.init();
});