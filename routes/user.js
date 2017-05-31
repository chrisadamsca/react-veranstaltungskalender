const express = require('express');
const user = require('../api/user');

const router = new express.Router();

router.get('/getUsers', (req, res) => {
  user.getAllUsers(req, res);
});

router.get('/getUserById/:userId', (req, res) => {
  user.returnUser(req, res);
});

router.get('/addUserToGroup/:userId/:gId', (req, res) => {
  user.addUserToGroup(req, res);
});

// new User: name, email and password needed
router.post('/', (req, res) => {
  user.createNewUser(req, res);
});

module.exports = router;
