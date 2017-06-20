import React, { Component } from 'react';
import { Link } from 'react-router';
import UserEventList from '../../components/Events/UserEvents';
import Auth from '../../modules/Auth';

export default class UserEventListContainer extends Component {
  constructor() {
    super();
    this.state = { events: [] };
  }

  componentDidMount() {
    const req = new XMLHttpRequest();
    req.open('GET', '/api/event', true);
    req.responseType = 'json';

    req.onload = () => {
      if (req.status >= 200 && req.status < 400) {
        // Success!
        const res = req.response;
        this.setState({
          events: res,
        });
      } else {
        // We reached our target server, but it returned an error
      }
    };

    req.onerror = () => {
      // There was a connection error of some sort
    };

    req.send();
  }

  render() {
    if (Auth.isUserAuthenticated()) {
      return (
        <UserEventList events={ this.state.events } />
      );
    } else {
      return (
        <Link to='/profil' activeClassName='active'>Einloggen</Link>
      );
    }
  }
}
