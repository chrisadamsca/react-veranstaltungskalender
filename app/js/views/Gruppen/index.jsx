import React, { Component } from 'react';
import { Link } from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import AllGroupsContainer from '../../containers/Groups/AllGroupsContainer';
import UserGroupsContainer from '../../containers/Groups/UserGroupsContainer';
import OtherGroupsContainer from '../../containers/Groups/OtherGroupsContainer';
import Auth from '../../modules/Auth';


export default class Events extends Component {
  render() {
    if (Auth.isUserAuthenticated()) {
      return (
        <div className='app-body'>
          <div className='card-container'>
            <h1 className='cardsHeader'>Deine Gruppen:</h1>
            <UserGroupsContainer />
          </div>

          <div className='card-container'>
            <h1 className='cardsHeader'>Andere Gruppen:</h1>
            <OtherGroupsContainer />
          </div>

          <Link to='/gruppeerstellen' activeClassName='active'>
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
            <h1 className='cardsHeader'>Alle Gruppen:</h1>
            <AllGroupsContainer />
          </div>
        </div>
      );
    }
  }
}
