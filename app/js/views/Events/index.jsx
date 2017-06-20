import React, { Component } from 'react';
import { Link } from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import UserEventListContainer from '../../containers/Events/UserEventsContainer';
import AllEventListContainer from '../../containers/Events/AllEventsContainer';
import OtherEventListContainer from '../../containers/Events/OtherEventsContainer';
import Auth from '../../modules/Auth';

export default class Events extends Component {
  render() {
    if (Auth.isUserAuthenticated()) {
      return (
        <div className='app-body'>
          <div className='card-container'>
            <h1 className='cardsHeader'>Meine Events:</h1>
            <UserEventListContainer />
          </div>

          <div className='card-container'>
            <h1 className='cardsHeader'>Andere Events:</h1>
            <OtherEventListContainer />
          </div>

          <Link to='/eventserstellen' activeClassName='active'>
            <FloatingActionButton className='floatingButton'>
              <ContentAdd />
            </FloatingActionButton>
          </Link>
        </div>
      );
    } else {
      return (
        <div className='app-body'>
          <div className='card-container'>
            <h1 className='cardsHeader'>Alle Events:</h1>
            <AllEventListContainer />
          </div>
        </div>
      );
    }
  }
}
