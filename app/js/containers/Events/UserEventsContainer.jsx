import React, { Component } from 'react';
import UserEventList from '../../components/Events/UserEvents';

// This is a placeholder for a real request
const fetchSomeEvents = cb =>
  cb([
    { id: '0001', title: 'Event 1', desc: 'You look nice today.' },
    { id: '0002', title: 'Event 2', desc: 'I know, right?!' },
    { id: '0003', title: 'Event 3', desc: 'I know, right?!' },
  ]);

export default class UserEventListContainer extends Component {
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
      <UserEventList events={ this.state.events } />
    );
  }
}
