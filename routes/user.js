const express = require('express');
const user = require('../api/user');

const router = new express.Router();

router.get('/', (req, res) => {
  user.getAllUsers(req, res);
});

router.post('/', (req, res) => {
  user.createNewUser(req, res);
});

module.exports = router;
