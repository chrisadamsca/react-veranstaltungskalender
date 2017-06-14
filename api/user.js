const User = require('../models/user');
const Group = require('../models/groups');
const Event = require('../models/events');


// Create User
module.exports.createUser = (req, res) => {
  const data = req.body;
  console.log(data);
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
    events: [],
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

    const returnGroups = [];
    const returnEvents = [];
    for (let i = 0; i < user.groups.length; i += 1) {
      Group.findById((user.groups[i]), (error, group) => {
        returnGroups.push(group);
      });
    }
    for (let i = 0; i < user.events.length; i += 1) {
      Event.findById((user.events[i]), (error, event) => {
        returnEvents.push(event);
      });
    }
    setTimeout(function () {
      const returnValue = {
        name: user.name,
        email: user.email,
        description: user.description,
        password: user.password,
        groups: returnGroups,
        events: returnEvents,
      };
      res.status(200).send(returnValue);
    }, 100);
  });
};

// Get all Users
module.exports.getAllUsers = (req, res) => {
  User.find((err, users) => {
    res.send(users);
    return null;
  });
};

// Update User
module.exports.updateUser = (req, res) => {
  const dates = req.params;
  const data = req.body;
  User.findById((dates.userId), (err, user) => {
    if (err) {
      res.status(400).send('User nicht gefunden');
    }
// add or remove a group
    if (data.gId != null) {
      Group.findById((data.gId), (error, group) => {
        if (error) {
          res.status(400).send('Gruppe nicht gefunden');
          return;
        }
        let groupIsInArray = false;
        for (let i = 0; i < user.groups.length; i += 1) {
          if (user.groups[i] === data.gId) {
            groupIsInArray = true;
          }
        }
        if (groupIsInArray) {
          User.update({ _id: dates.userId },
          { $pull: { groups: data.gId } }, (er) => {
            if (er) res.status(400).send('Gruppe nicht gefunden');
          });
          Group.update({ _id: group._id },
              { $pull: { users: dates.userId } }, (er) => {
                if (er) res.status(400).send('User Hier nicht gefunden');
                else res.status(200).send('Gruppe erfolgreich entfernt');
              });
        } else {
          Group.update({ _id: data.gId },
              { $addToSet: { users: (dates.userId) } }, (er) => {
                if (er) {
                  res.status(400).send('User nicht gefunden');
                }
              });
          for (let i = 0; i < group.events.length; i += 1) {
            User.update({ _id: dates.userId },
              { $addToSet: { events: (group.events[i]) } }, (er) => {
                if (er) console.error(er);
              });
          }
          User.update({ _id: dates.userId }, { $addToSet: { groups: (data.gId) } }, (er) => {
            if (er) {
              res.status(400).send('User nicht gefunden');
            }
            res.status(200).send('Gruppe erfolgreich hinzugefügt');
          });
        }
      });
    }

    // Change users name
    if (data.name != null) {
      User.update({ _id: dates.userId }, { $set: { name: data.name } }, (error) => {
        if (error) res.status(400).send('User nicht gefunden');
        else res.status(200).send('Name erfolgreich geändert');
      });
    }

    // Change users description
    if (data.description != null) {
      User.update({ _id: dates.userId }, { $set: { description: data.description } }, (error) => {
        if (error) res.status(400).send('User nicht gefunden');
        else res.status(200).send('Beschreibung erfolgreich geändert');
      });
    }
  });
};

// delete User
module.exports.deleteUser = (req, res) => {
  const data = req.params;
  if (data === undefined || data.length === 0) {
    res.status(400).send('Es wurden keine Daten gesendet');
    return;
  }
  User.findById(data.userId, (err, user) => {
    if (err) res.status(400).send('User konnte nicht gefunden werden');
    else {
      for (let i = 0; i < user.groups.length; i += 1) {
        Group.update({ _id: user.groups[i] },
          { $pull: { users: data.userId } }, (er) => {
            if (er) res.status(400).send('User Hier nicht gefunden');
          });
      }
    }
  });
  User.findByIdAndRemove(data.userId, (err) => {
    if (err) {
      res.status(400).send('Nutzer konnte nicht gelöscht werden');
    } else res.status(200).send('Nutzer erfolgreich gelöscht');
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
