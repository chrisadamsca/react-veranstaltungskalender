import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import AllGroupsContainer from '../../containers/Groups/AllGroupsContainer';
import UserGroupsContainer from '../../containers/Groups/UserGroupsContainer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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

        <Link to='/gruppeerstellen' activeClassName='active'>
          <FloatingActionButton className='floatingButton'>
            <ContentAdd />
          </FloatingActionButton>
        </Link>
      </div>
    );
  }
}
