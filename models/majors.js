const db = require('../util/dbconnection')

exports.getAll = function(done){
	db.get().query(`SELECT * FROM majors_table`, (err,rows)=>{
		if(err) return done(err)
		done(null,rows)
	})
}