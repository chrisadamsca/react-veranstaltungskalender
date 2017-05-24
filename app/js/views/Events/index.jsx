import React, { Component } from 'react';
import UserEventListContainer from '../../containers/Events/UserEventsContainer';
import AllEventListContainer from '../../containers/Events/AllEventsContainer';


export default class Events extends Component {
  render() {
    return (
      <div className='app-body'>
        <h1 className='tile'>Meine Events:</h1>
        <UserEventListContainer />
        <h1 className="tile">Alle Events:</h1>
        <AllEventListContainer />
      </div>
    );
  }
}
