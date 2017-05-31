const express = require('express');
const group = require('../api/group');

const router = new express.Router();

router.get('/getGroups', (req, res) => {
  group.getAllGroups(req, res);
});

router.get('/getGroupById/:gId', (req, res) => {
  group.returnGroup(req, res);
});

router.get('/addUserToGroup/:userId/:gId', (req, res) => {
  group.addUserToGroup(req, res);
});

// new group: name, imagePath, userId
router.post('/', (req, res) => {
  group.createNewUser(req, res);
});

module.exports = router;
