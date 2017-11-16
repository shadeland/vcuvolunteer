var express = require('express');
var model  = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/profile', function(req, res, next) {
	res.render('student/profile');
});
// API to populate the form
router.get('/profile/majors', function(req,res,next){
	model.major.findAll().then(majors => {
		let out = {
            "success":true,
        };
		out.results  = majors.map((x)=>{
            return {
                'name':x.major_name,
                'value':x.ID
            };
        });
        
        res.json(out);
	});
});
router.post('/create', function(req, res, next) {
	console.log(req.body);
	

	model.profile.create({
			first_name: req.body.firstName,
			last_name: req.body.lastName,
	})
	.then(profile=>{
		return profile.setMajors(req.body.selectMajor);
	})
	.then(()=>{
		return model.profile.findAll({
			attributes: ['first_name', 'last_name', 'majors.major_name'],
			include:[{ 
				model: model.major,
				attributes:['major_name'],
				through:{attributes:[]},
			}],
		});
	})
	.then(profile=>{
		res.json(profile);
	})
	.catch(console.error);
	// res.render('student/profile');
});

module.exports = router;
