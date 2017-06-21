import React from 'react';
import { Link } from 'react-router';
import Avatar from 'material-ui/Avatar';

class Profil extends React.Component {
  render() {
    let currentUser;
    if (localStorage.getItem('currentUser') !== '') {
      currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    return (
      <div className='loggedProfile'>
        <Avatar src='{ currentUser.image }' />
        <h1>{ currentUser.name }</h1>
        <p>{ currentUser.email }</p>
        <Link to='/logout'>Ausloggen</Link>
      </div>
    );
  }
}

export default Profil;
