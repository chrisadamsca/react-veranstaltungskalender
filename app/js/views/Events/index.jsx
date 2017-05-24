import React, { Component } from 'react';
import EventListContainer from '../../containers/Events/EventListContainer';

export default class Events extends Component {
  render() {
    return (
      <div className='app-body'>
        <h1 className='tile'>Meine Events:</h1>
        <EventListContainer />
      </div>
    );
  }
}
