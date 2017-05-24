const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;

const app = express();

app.set('port', 3000);

//providing static files
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'dist')));

var mongodb = mongoose.connection;
/*
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});
*/
const server = app.listen(app.get('port'), () => {
  const port = server.address().port;
  console.log('Example app listening on port 3000!');
});



// Mongo-DB setup
mongoose.connect('mongodb://db:27017/users');

mongodb.on('error', console.error.bind(console, 'connection error:'));
mongodb.once('open', () => {
  console.log('connection to mongodb established');
  // Users
});    // Creating the Schema for Users
  const userSchema = mongoose.Schema({
    name: String,
    mail: String,
    description: String,
    password: String,
    groups: [String],
  });
  const User = mongoose.model('User', userSchema);

  // create and delete Users
    // create a new User
  function createNewUser(userName, userMail, userDescr, userPassword) {
    const newUser = new User(
      { name: userName, mail: userMail, description: userDescr, password: userPassword, groups: [] });
    newUser.save((err) => {
      if (err) return console.error(err);
      return null;
    });
  }

  // delete an User
  function deleteUser(userID) {
    User.findOneAndRemove({ _id: userID }, (err, user) => {
      if (err) return console.error(err);
      // removing User from the Groups Arrays
      for (let i = user.groups.length - 1; i >= 0; i -= 0) {
        Group.update({ _id: user.groups[i] }, { $pullAll: { users: [userID] } }, (error) => {
          if (error) console.error(err);
        });
      }
      return null;
    });
  }


// edit User
  // change the Users name
  function changeUserName(userID, newName) {
    User.findByIdAndUpdate(userID, { $set: { name: newName } }, { new: true }, (err) => {
      if (err) return console.error(err);
      return null;
    });
  }
  // change the Users mail
  function changeUserMail(userID, newMail) {
    User.findByIdAndUpdate(userID, { $set: { mail: newMail } }, { new: true }, (err) => {
      if (err) return console.error(err);
      return null;
    });
  }
  // change the Users password
  function changeUserPWD(userID, newPWD) {
    User.findByIdAndUpdate(userID, { $set: { password: newPWD } }, { new: true }, (err) => {
      if (err) return console.error(err);
      return null;
    });
  }


// Manage useres groups:
  // add a user to an existing group
  function addUserToGroup(userID, gID, gName) {
    User.update({ _id: userID }, { $push: { groups: gID } }, (err) => {
      if (err) console.error(err);
    });
    /*
    User.update({ _id: userID }, { $push: { groups: groupName } }, (err) => {
    if (err) console.error(err);
    });
    User.update({ _id: userID }, { $push: { groups: { groupName: gName, groupID: gID } } }, (err) => {
      if (err) console.error(err);
    });
    */
    Group.update({ _id: gID }, { $push: { users: userID } }, (err) => {
      if (err) return console.error(err);
      return null;
    });
  }
  // remove a user from a group
  function removeUserFromGroup(userID, groupID) {
    User.update({ _id: userID }, { $pullAll: { groups: [groupID] } }, (err) => {
      if (err) console.error(err);
    });
    Group.update({ _id: groupID }, { $pullAll: { users: [userID] } }, (err) => {
      if (err) return console.error(err);
      return null;
    });
  }

// Groups
  // Creating the Schema for Groups
  const groupSchema = mongoose.Schema({
    name: String,
    groupImage: String,
    description: String,
    users: [String],
    events: [String],
    owner: String,
  });

  const Group = mongoose.model('Group', groupSchema);


// creating and deleting Groups
  // creating a new Group
  function createNewGroup(groupName, groupImageFilePath, groupDescription, ownerID) {
    const newGroup = new Group({ name: groupName, groupImage: groupImageFilePath, description: groupDescription, events: [], owner: ownerID });
    newGroup.save((err, addedGroup) => {
      if (err) return console.console.error(err);
      addUserToGroup(ownerID, addedGroup._id, addedGroup.name);
      return null;
    });
  }
  // deleting a Group
  function deleteGroup(groupID) {
    Group.findOneAndRemove({ _id: groupID }, (err, group) => {
      if (err) return console.error(err);
      // removing Group from the Users Arrays
      for (let i = group.users.length - 1; i >= 0; i -= 1) {
        removeUserFromGroup(group.users[i], groupID);
      }
      return null;
    });
  }


// editing a Group
  // change the Groups name
  function changeGroupName(groupID, newName) {
    Group.findByIdAndUpdate(groupID, { $set: { name: newName } }, { new: true }, (err) => {
      if (err) return console.error(err);
      return null;
    });
  }

  // change the path to the Groups Image file
  function changeImage(groupID, newImg) {
    Group.findByIdAndUpdate(groupID, { $set: { image: newImg } }, { new: true }, (err) => {
      if (err) return console.error(err);
      return null;
    });
  }
  // change the Groups description
  function changeGroupDescription(groupID, newDescr) {
    Group.findByIdAndUpdate(groupID, { $set: { description: newDescr } }, { new: true },
      (err) => {
        if (err) return console.error(err);
        return null;
      });
  }

  // change the Groups Owner
  function changeGroupOwner(groupID, newOwner) {
    Group.findByIdAndUpdate(groupID, { $set: { ownerID: newOwner } }, { new: true },
      (err) => {
        if (err) return console.error(err);
        return null;
      });
  }


// Managing the Groups Events
// add an Event to an existing Group
function addEventToGroup(groupID, eventID) {
  Group.update({ _id: groupID }, { $push: { events: eventID } }, (err) => {
    if (err) console.error(err);
    Event.update({ _id: eventID }, { $push: { parentGroupIDs: [groupID] } }, (error) => {
      if (err) console.error(error);
    });
  });
}

// remove an Event from a Group
function removeEventFromGroup(groupID, eventID) {
  Group.update({ _id: groupID }, { $pullAll: { events: [eventID] } }, (err) => {
    if (err) console.error(err);
    Event.update({ _id: eventID }, { $pullAll: { parentGroupIDs: [groupID] } }, (error) => {
      if (error) console.error(err);
    });
  });
}

// Events
  // Creating the Schema for Events
const eventSchema = mongoose.Schema({
  name: String,
  date: Date,
  description: String,
  location: String,
  parentGroups: [String],
  owner: String,
});
const Event = mongoose.model('Event', eventSchema);


// creating and deleting Events
  // creating a new Event
function createNewEvet(eventName, eventDate, eventDescription, eventLocation, [parentGroupIDs], ownerID) {
  const newEvent = new Event({ name: eventName, date: eventDate, description: eventDescription, location: eventLocation, owner: ownerID });
  newEvent.save((err, addedEvent) => {
    if (err) return console.console.error(err);
    for (let i = parentGroupIDs.length - 1; i >= 0; i -= 1) {
      addEventToGroup(parentGroupIDs[i], addedEvent._id);
    }
    return null;
  });
}
// deleting an Event - toDo
function deleteEvent(eventID) {
  Event.findOneAndRemove({ _id: eventID }, (err, event) => {
    if (err) return console.error(err);
    // removing Event from the Groups Arrays
//    for (var i = event.parentGroupIDs.length -1; i >=0; i--) {
  //    removeEventFromGroup(parentGroupIDs[i], eventID);
    // }
    return null;
  });
}


// editing an Event
// change the Events name
function changeEventName(eventID, newName) {
  Event.findByIdAndUpdate(eventID, { $set: { name: newName } }, { new: true }, (err) => {
    if (err) return console.error(err);
    return null;
  });
}
// change the Events date
function changeEventDate(eventID, newDate) {
  Event.findByIdAndUpdate(eventID, { $set: { date: newDate } }, { new: true }, (err) => {
    if (err) return console.error(err);
    return null;
  });
}
// change the Events description
function changeEventDescription(eventID, newDescr) {
  Event.findByIdAndUpdate(eventID, { $set: { description: newDescr } }, { new: true }, (err) => {
    if (err) return console.error(err);
    return null;
  });
}
// change the Events Location
function changeEventLocation(eventID, newLocation) {
  Event.findByIdAndUpdate(eventID, { $set: { location: newLocation } }, { new: true }, (err) => {
    if (err) return console.error(err);
    return null;
  });
}
  // change the Events owner
function changeEventOwner(eventID, newOwnerID) {
  Event.findByIdAndUpdate(eventID, { $set: { owner: newOwnerID } }, { new: true }, (err) => {
    if (err) return console.error(err);
    return null;
  });
}

// create a testuser
// createNewUser('Hans', 'Hans@web.de', 'What a man', 'Start123');

// delete a testuser
// deleteUser('591cde163d95a8000f9670b2');

// create a testgroup
// createNewGroup('Neue Gruppe von Hans', 'image.jpg', 'Alle Freunde von Hans. Alle!', '591ce2fad337ed000f6b69df');

// delete a testgroup
// deleteGroup('591ce3488ada2c000ffd463d');

// add testuser to testgroup
// addUserToGroup('591ce2fad337ed000f6b69df', '591ce32136f09e000f53177b');

// remove testuser from testgroup
// removeUserFromGroup('590387e43f9eb70025029b4b', '59038295953eef0025eff9a2');

// rename the user
// changeUserName('590355a7e2a31c002589651a', 'Hans-sama');

// create a testevent
// createNewEvent('Hans Party', 2017-05-11, 'Tolle Partey', 'bei Hans daheim', ['59039277b5be100025b2e244');

// delete a testevent
// deleteEvent('59039488b3f8230025d6b6b9');

// deleting a testevent
// deleteEvent('590358fd8c0d73002555fad9');


// Console testing:
  // Find a (range of) user(s) and return him(/them) to the console

  /*
  User.find({name: /Hans/}, function (err, users) {
      if (err) return console.error (err);
      console.log('User:');
      console.log(users);
    });

  //Find a (range of) group(s) and return it(/them) to the console
    Group.find({name: /Gruppe von Hans/}, function (err, users) {
      if (err) return console.error (err);
      console.log('Gruppen:')
      console.log(users);
    });


  //Find a (range of) event(s) and return it(/them) to the console
    Event.find({name: /Hans/}, function (err, users) {
      if (err) return console.error (err);
      console.log('Events:')
      console.log(users);
    });
    */

app.get('/testMongo', (req, res) => {
  User.findOne({ _id: '591ce2fad337ed000f6b69df' }, (err, user) => {
    if (err) console.error(err);

// pack groupnames and groupIDs in an Array of Objects
    let userGroups = [];
    let userEvents = [];


    for (let i = 0; i <= user.groups.length - 1; i += 1) {
      Group.findOne({ _id: user.groups[i] }, (error, group) => {
        if (error) console.error(error);
          userGroups.push({ groupName: group.name, groupID: group._id });
          console.log(userGroups);
      });
      console.log(userGroups);

    }


/*    var userGroups = new Array(user.groups.length);

    for (let i = 0; i <= user.groups.length - 1; i += 1) {

      Group.findOne({ _id: user.groups[i] }, (error, group) => {
        userGroups[i] = { groupName: group.name, groupID: group._id };
        for (let j = 0; j <= group.events.length - 1; j ++) {
        userEvents.push(Event.findOne({ _id: group.events[j]}, (failed) => {
        if (failed) console.error(failer);
      }))
      }

        console.log('In der Schleife: ' + userGroups[i]);
      });
      console.log('Außerhalb der Schleife: ' + userGroups[i]);
    }
      */


// send data
    res.send({
      name: user.name,
      description: user.description,
      groups: userGroups,
      events: userEvents
    });
  });
});
//
