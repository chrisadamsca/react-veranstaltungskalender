const User = require('../models/user');
const Group = require('../models/groups');


// Create User
module.exports.createUser = (req, res) => {
  const data = req.body;

  if (data === undefined || data.length === 0) {
    res.status(400).send('Es wurden keine Daten gesendet');
    return;
  }

  const newUser = new User({
    name: data.name,
    email: data.email,
    description: ' ',
    password: data.password,
    groups: [],
  });
  newUser.save((err) => {
    if (err) return console.error(err);
    res.status(200).send('User erstellt!');
    return null;
  });
};


// Get User
module.exports.getUser = (req, res) => {
  const data = req.params;
  if (data === undefined || data.length === 0) {
    res.status(400).send('Es wurden keine Daten gesendet');
    return;
  }
  User.findById((data.userId), (err, user) => {
    if (err) {
      res.status(400).send('User nicht gefunden');
      return;
    }
    for (let i = 0; i < user.groups.length; i += 1) {
      User.update({ _id: data.userId },
        { $addToSet: { events: { $each: user.groups[i].events } } });
    }
    res.status(200).send(user);
  });
};

// Get User
module.exports.getAllUsers = () => {
  User.find((err, users) => {
    console.log(users);
    return null;
  });
};

// Update User
module.exports.updateUser = (req, res) => {
  const data = req.params;
  Group.findById((data.gId), (err, group) => {
    if (err) {
      res.status(400).send('Gruppe nicht gedunden');
      return;
    }
    User.update({ _id: data.userId }, { $addToSet: { groups: (group) } }, (error) => {
      if (error) {
        res.status(400).send('User nicht gefunden');
      }
    });
  });
  Group.update({ _id: data.gId }, { $addToSet: { user: (data.userId) } });
  User.findById((data.userId), (err, user) => {
    if (err) {
      res.status(400).send('User nicht gefunden');
      return;
    }
    res.status(200).send(user);
  });
};

// Login User
module.exports.loginUser = (req, res) => {
  const data = req.body;
  const hashedPassword = data.password;

  User.findOne({ email: data.email, password: hashedPassword }, (err, user) => {
    if (err) {
      res.status(400).send('Es ist ein Fehler aufgetreten');
    }
    res.status(200).send(user._id);
  });
};
