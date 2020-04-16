// Update with your config settings.
require('dotenv').config();
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/bonus-crud-api'
  },
  production: {
    client: 'pg',
    connection: process.env.DB_URL
  }

};
