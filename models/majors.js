const dbs = require('../util/dbconnection')

exports.getAll = function(done){
	dbs.get().query(`SELECT * FROM majors_table`, (err,rows)=>{
		if(err) return done(err)
		done(null,rows)
	})
}