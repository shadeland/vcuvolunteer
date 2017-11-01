app = {}; 
app.serverAdress = 'localhost:8080/'

app.getMajorList = function(){
		axios.get(serverAdress+'api/majors')
			.then((response)=>{
				console.log(response);
			})
}