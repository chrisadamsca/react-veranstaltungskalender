import React, { Component } from 'react';

// This is a placeholder for a real request
const fetchSomeEvents = cb =>
  cb([
    { id: '0001', title: 'Event 1', desc: 'You look nice today.' },
    { id: '0002', title: 'Event 2', desc: 'I know, right?!' },
  ]);

export default class EventList extends Component {
  constructor() {
    super();
    this.state = { events: [] };
  }
  componentDidMount() {
    fetchSomeEvents(events =>
    this.setState({ events: events }));
  }
  render() {
    return (
      <ul className='tile-list'>
        {this.state.events.map(event => (
          <li key={ event.id } className='tile'>{event.title}</li>
        ))}
      </ul>
    );
  }
}
