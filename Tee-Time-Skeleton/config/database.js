const {
  username,
  password,
  database,
  host
} = require('./index').db;



module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'postgres://dvlzynaipmepxk:4d0926416eeb9c6e017c166e8ef878768acc32848f262f8c288ef6ca5a2a073c@ec2-52-200-134-180.compute-1.amazonaws.com:5432/dc3eq2e38fao29',
    dialect: 'postgres',
    seederStorage: 'sequelize',
  }
};
