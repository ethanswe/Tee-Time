const {
  username,
  password,
  database,
  host
} = require('./index').db;

const {db} = require('./index')
console.log(db);
console.log(process.env);

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres'
  }
};
