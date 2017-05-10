import React, { Component } from 'react';
import EventList from '../../components/Events/EventList';

export default class Events extends Component {
  render() {
    return (
      <div className='app-body'>
        <h1 className='tile'>Meine Events:</h1>
        <EventList />
      </div>
    );
  }
}
