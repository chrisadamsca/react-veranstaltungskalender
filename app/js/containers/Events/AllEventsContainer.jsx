import React, { Component } from 'react';
import AllEventList from '../../components/Events/AllEvents';

// This is a placeholder for a real request
// const fetchSomeEvents = cb =>
//   cb([
//     { id: '0001', title: 'Event 1', desc: 'You look nice today.' },
//     { id: '0002', title: 'Event 2', desc: 'I know, right?!' },
//     { id: '0003', title: 'Event 3', desc: 'I know, right?!' },
//   ]);


export default class AllEventListContainer extends Component {
  constructor() {
    super();
    this.state = { events: [] };
  }

  componentDidMount() {
    // fetchSomeEvents(events =>
    // this.setState({ events: events }));

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
