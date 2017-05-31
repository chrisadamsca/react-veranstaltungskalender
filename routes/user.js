const express = require('express');
const user = require('../api/user');

const router = new express.Router();

// new User: name, email and password needed
router.post('/', (req, res) => {
  user.createUser(req, res);
});

// Get all Users
router.get('/', (req, res) => {
  user.getAllUsers(req, res);
});

// Get user by ID
router.get('/:userId', (req, res) => {
  user.getUser(req, res);
});

// Update User Data
router.put('/:userId', (req, res) => {
  user.updateUser(req, res);
});

// Delete User
router.delete('/:userId', (req, res) => {
  user.deleteUser(req, res);
});

// Login User
router.post('/login', (req, res) => {
  user.loginUser(req, res);
});

module.exports = router;
