const knex = require('./knex'); //the connection

module.exports = {
  getAll() {
    return knex('message'); // short for knex('messages).select('*');
  },
  create(message) {
    return knex('message').insert(message, '*');
  }
};