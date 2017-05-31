const Group = require('../models/groups');
const User = require('../models/user');

module.exports.createNewGroup = (req, res) => {
  const data = req.body;

  if (data === undefined || data.length === 0) {
    res.status(400).send('Es wurden keine Daten gesendet');
    return;
  }

  const newGroup = new Group({
    name: data.name,
    description: '',
    image: data.imagePath,
    users: [],
    events: [],
  });
  newGroup.users.push(data.userId);
  newGroup.save((err) => {
    if (err) return console.error(err);
    res.status(200).send('Group created!');
    return null;
  });
};

module.exports.getAllGroups = () => {
  Group.find((err, groups) => {
    if (err) return console.error(err);
    console.log('Group:');
    console.log(groups);
    return null;
  });
};

module.exports.returnGroup = (req, res) => {
  const data = req.params;
  if (data === undefined || data.length === 0) {
    res.status(400).send('Es wurden keine Daten gesendet');
    return;
  }
  Group.findById((data.gId), (err, group) => {
    if (err) {
      res.status(400).send('Gruppe nicht gefunden');
      return;
    }
    res.status(200).send(group);
  });
};
