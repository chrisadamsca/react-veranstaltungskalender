import React, { Component } from 'react';
import GroupList from '../../components/Groups/GroupList';

export default class Events extends Component {
  render() {
    return (
      <div className='app-body'>
        <h1 className='tile'>Meine Gruppen:</h1>
        <GroupList />
      </div>
    );
  }
}
