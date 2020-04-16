const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function validMessage(message){
  const hasName = typeof message.user == 'string' && message.user.trim() != '';
  const hasText = typeof message.text == 'string' && message.text.trim() != '';
  return hasName && hasText;
}

router.get('/', (req, res) => {
  queries.getAll().then(messages => {
    //remove id from each item
    messages.forEach(function(message){ delete message.id })
    res.json(messages);
  });
});

router.post('/', (req, res, next) => {
  if(validMessage(req.body)) {
    queries.create(req.body).then(messages => {
      res.json(messages);
    });
  } else {
    next(new Error('Invalid message'));
  }
});
module.exports = router;