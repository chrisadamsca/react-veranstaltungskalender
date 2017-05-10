import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class NavBar extends Component {
  render() {
    return (
      <nav id='NavBar'>
        <ul>
          <li><IndexLink to='/' activeClassName='active'>Events</IndexLink></li>
          <li><Link to='/gruppen' activeClassName='active'>Gruppen</Link></li>
          <li><Link to='/profil' activeClassName='active'>Profil</Link></li>
        </ul>
      </nav>
    );
  }
}
