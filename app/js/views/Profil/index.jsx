import React from 'react';
import { Link } from 'react-router';

class Profil extends React.Component {
  render() {
    let currentUser;
    if (localStorage.getItem('currentUser') !== '') {
      currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    return (
      <div>
        <h1>Mein Profil: </h1>
        <h2>Name: { currentUser.name }</h2>
        <p>E-Mail: { currentUser.email }</p>
        <Link to='/logout'>Ausloggen</Link>
      </div>
    );
  }
}

export default Profil;
