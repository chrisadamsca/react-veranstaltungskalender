import React, { Component } from 'react';
import AllEventList from '../../components/Events/AllEvents';

export default class AllEventListContainer extends Component {
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
    return (
      <AllEventList events={ this.state.events } />
    );
  }
}
