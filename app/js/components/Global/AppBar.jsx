import React, { Component } from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import Auth from '../../modules/Auth';

export default class AppBar extends Component {
  render() {
    if (Auth.isUserAuthenticated()) {
      return (
        <div id='AppBar'>
          <Link className='logoutBtn' to='/logout'>
            <FlatButton label="Ausloggen" />
          </Link>
        </div>
      );
    } else {
      return (
        <div id='AppBar'></div>
      );
    }


  }
}
