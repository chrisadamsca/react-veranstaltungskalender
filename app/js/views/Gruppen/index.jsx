import React, { Component } from 'react';
import AllGroupsContainer from '../../containers/Groups/AllGroupsContainer';
import UserGroupsContainer from '../../containers/Groups/UserGroupsContainer';

export default class Events extends Component {
  render() {
    return (
      <div className='app-body'>
        <div className='card-container'>
          <h1 className='cardsHeader'>Deine Gruppen:</h1>
          <UserGroupsContainer />
        </div>

        <div className='card-container'>
          <h1 className='cardsHeader'>Andere Gruppen:</h1>
          <AllGroupsContainer />
        </div>
      </div>
    );
  }
}
