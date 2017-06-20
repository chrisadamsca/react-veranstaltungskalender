import React, { Component } from 'react';
import { Link } from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import AllGroupsContainer from '../../containers/Groups/AllGroupsContainer';
import UserGroupsContainer from '../../containers/Groups/UserGroupsContainer';
import OtherGroupsContainer from '../../containers/Groups/OtherGroupsContainer';
import Auth from '../../modules/Auth';


export default class Events extends Component {
  constructor() {
    super();
    this.state = {
      userGroups: [],
      otherGroups: [],
    };

    this.exitGroup = this.exitGroup.bind(this);
    this.enterGroup = this.enterGroup.bind(this);
  }

  componentDidMount() {
    const req = new XMLHttpRequest();
    req.open('GET', '/api/user/' + JSON.parse(localStorage.getItem('currentUser')).userID);
    req.responseType = 'json';

    req.addEventListener('load', () => {
      if (req.status === 200) {
        // Success!
        const res = req.response;
        this.setState({
          userGroups: res.groups,
        });
        console.log('UserStart: ', this.state.userGroups);
      } else {
        // We reached our target server, but it returned an error
      }
    });

    req.send();

    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/group/user/' + JSON.parse(localStorage.getItem('currentUser')).userID, true);
    xhr.responseType = 'json';

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 400) {
        // Success!
        const res = xhr.response;
        this.setState({
          otherGroups: res,
        });
        console.log('OtherStart: ', this.state.otherGroups);
      } else {
        // We reached our target server, but it returned an error
      }
    };

    xhr.send();

  }

  exitGroup(gId) {
    // HTTP Message:
    const httpMessage = 'gId=' + gId;

    // AJAX-Request
    const xhr = new XMLHttpRequest();
    xhr.open('put', '/api/user/' + JSON.parse(localStorage.getItem('currentUser')).userID);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // ERFOLG:
        const userGroups = this.state.userGroups.slice();
        const otherGroups = this.state.otherGroups.slice();

        // console.log('Neuer Klick: ');
        // console.log('User: ', userGroups);
        // console.log('User from State: ', this.state.userGroupss);
        // console.log('Other: ', otherGroups);
        // console.log('GroupID: ', gId);

        let index;
        for (let i = 0; i < userGroups.length; i += 1) {
          if (userGroups[i]._id === gId) {
            index = i;
          }
        }

        const transferGroup = userGroups[index];
        userGroups.splice(index, 1);
        otherGroups.push(transferGroup);

        // console.log('Index: ', index);
        // console.log('Transfer: ', transferGroup);
        // console.log('User: ', userGroups);
        // console.log('Other: ', otherGroups);

        this.setState({
          userGroups: userGroups,
          otherGroups: otherGroups,
        });
      }
    });
    xhr.send(httpMessage);
  }

  enterGroup(gId) {
    // HTTP Message:
    const httpMessage = 'gId=' + gId;

    // AJAX-Request
    const xhr = new XMLHttpRequest();
    xhr.open('put', '/api/user/' + JSON.parse(localStorage.getItem('currentUser')).userID);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // ERFOLG:
        const userGroups = this.state.userGroups.slice();
        const otherGroups = this.state.otherGroups.slice();

        // console.log('Neuer Klick: ');
        // console.log('User: ', userGroups);
        // console.log('Other: ', otherGroups);
        // console.log('GroupID: ', gId);

        let index;
        for (let i = 0; i < otherGroups.length; i += 1) {
          if (otherGroups[i]._id === gId) {
            index = i;
          }
        }

        const transferGroup = otherGroups[index];
        otherGroups.splice(index, 1);
        userGroups.push(transferGroup);

        // console.log('Index: ', otherGroupIndex[0]);
        // console.log('Transfer: ', transferGroup);
        // console.log('User: ', userGroups);
        // console.log('Other: ', otherGroups);

        this.setState({
          userGroups: userGroups,
          otherGroups: otherGroups,
        });
      }
    });
    xhr.send(httpMessage);
  }

  render() {
    if (Auth.isUserAuthenticated()) {
      return (
        <div className='app-body'>
          <div className='card-container'>
            <h1 className='cardsHeader'>Deine Gruppen:</h1>
            <UserGroupsContainer groups={ this.state.userGroups } exitGroup={ this.exitGroup } />
          </div>

          <div className='card-container'>
            <h1 className='cardsHeader'>Andere Gruppen:</h1>
            <OtherGroupsContainer groups={ this.state.otherGroups } enterGroup={ this.enterGroup } />
          </div>

          <Link to='/gruppeerstellen' activeClassName='active'>
            <FloatingActionButton className='floatingButton'>
              <ContentAdd />
            </FloatingActionButton>
          </Link>
        </div>
      );
    } else {
      return (
        <div className='app-body'>
          <Link to='/profil' activeClassName='active'>Einloggen</Link>
          <div className='card-container'>
            <h1 className='cardsHeader'>Alle Gruppen:</h1>
            <AllGroupsContainer />
          </div>
        </div>
      );
    }
  }
}
