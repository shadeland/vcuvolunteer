const mysql = require('mysql');
const connection = mysql.createConnection({
	host:'',
	user:'',
	password:'',
	database:''
})

let state = {
	pool: null, 
	mode: null,
}

exports.connect = function(mode, done){
	state.pool = mysql.createPool({
		host:'vcuvolunteer.ctoj8djqtees.us-west-2.rds.amazonaws.com',
		user:'adel',
		password:'mamal65serenti',
		database:'vcuvolunteer'
	})
	done()
}

exports.get = function (){
 	return state.pool
}

exports.fixtures = function(data){
	let pool = state.pool

	let names = Object.keys(data.tables)
	async.each(names, (name, cb)=>{
		async.each(data.tables[name], (row,cb)=>{
			let keys = Object.keys(row)
			,   values = keys.map((key)=>{return "'" + row[key]+"'"})
		})
        
		pool.query(`INSERT INTO ${name} ( ${keys.joint(',')} ) VALUES (${values.joint(',')}) `, cb)

	}, done)
}

