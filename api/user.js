const User = require('../models/user');

module.exports.createNewUser = (req, res) => {
  const data = req.body;

  if (data === undefined || data.length === 0) {
    res.status(400).send('Es wurden keine Daten gesendet');
    return;
  }

  const newUser = new User({
    name: data.name,
    email: data.email,
    description: '',
    password: data.password,
    groups: [],
  });
  newUser.save((err) => {
    if (err) return console.error(err);
    res.status(200).send('User created!');
    return null;
  });
};

module.exports.getAllUsers = () => {
  User.find((err, users) => {
    if (err) return console.error(err);
    console.log('User:');
    console.log(users);
    return null;
  });
};
//
// // delete an User
// function deleteUser(userID) {
//   User.findOneAndRemove({ _id: userID }, (err, user) => {
//     if (err) return console.error(err);
//     // removing User from the Groups Arrays
//     for (let i = user.groups.length - 1; i >= 0; i -= 0) {
//       Group.update({ _id: user.groups[i] }, { $pullAll: { users: [userID] } }, (error) => {
//         if (error) console.error(err);
//       });
//     }
//     return null;
//   });
// }
//
//
// // edit User
//   // change the Users name
//   function changeUserName(userID, newName) {
//     User.findByIdAndUpdate(userID, { $set: { name: newName } }, { new: true }, (err) => {
//       if (err) return console.error(err);
//       return null;
//     });
//   }
//   // change the Users mail
//   function changeUserMail(userID, newMail) {
//     User.findByIdAndUpdate(userID, { $set: { mail: newMail } }, { new: true }, (err) => {
//       if (err) return console.error(err);
//       return null;
//     });
//   }
//   // change the Users password
//   function changeUserPWD(userID, newPWD) {
//     User.findByIdAndUpdate(userID, { $set: { password: newPWD } }, { new: true }, (err) => {
//       if (err) return console.error(err);
//       return null;
//     });
//   }
