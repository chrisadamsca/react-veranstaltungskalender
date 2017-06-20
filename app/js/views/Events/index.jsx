import React, { Component } from 'react';
import UserEventListContainer from '../../containers/Events/UserEventsContainer';
import AllEventListContainer from '../../containers/Events/AllEventsContainer';
import Auth from '../../modules/Auth';


export default class Events extends Component {
  render() {
    return (
      <div className='app-body'>
        <div className='card-container'>
          <h1 className='cardsHeader'>Meine Events:</h1>
          <UserEventListContainer />
        </div>

        <div className='card-container'>
          <h1 className='cardsHeader'>Alle Events:</h1>
          <AllEventListContainer />
        </div>
      </div>
    );
  }
}
