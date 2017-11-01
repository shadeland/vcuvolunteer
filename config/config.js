module.exports = {
  development: {
    url: 'vcuvolunteer.ctoj8djqtees.us-west-2.rds.amazonaws.com', // database name
    database: 'vcuvolunteer',
    dialect: 'mysql',
    username: 'adel',
    password: 'mamal65serenti',
    port: 3306
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'mysql'
  },
  staging: {
    url: process.env.DATABASE_URL,
    dialect: 'mysql'
  },
  test: {
    url: process.env.DATABASE_URL || '',
    dialect: 'mysql'
  }
};