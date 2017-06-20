import React, { Component } from 'react';
import OtherEventList from '../../components/Events/UserEvents';

export default class UserEventListContainer extends Component {
  constructor() {
    super();
    this.state = { events: [] };
  }

  componentDidMount() {
    const req = new XMLHttpRequest();
    req.open('GET', '/api/user/' + JSON.parse(localStorage.getItem('currentUser')).userID, true);
    req.responseType = 'json';

    req.onload = () => {
      if (req.status >= 200 && req.status < 400) {
        // Success!
        const res = req.response;
        this.setState({
          events: res.possibleEvents,
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
    return (
      <OtherEventList events={ this.state.events } />
    );
  }
}
