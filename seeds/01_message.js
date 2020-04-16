const messages = require('../messages');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('message').del()
    .then(function () {
      // Inserts seed entries
      return knex('message').insert(messages);
    });
};
