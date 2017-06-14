import React, { Component } from 'react';
import UserGroups from '../../components/Groups/UserGroups';

// This is a placeholder for a real request
const fetchSomeGroups = cb =>
  cb([
    { id: '0001', title: 'Gruppe 1', desc: 'You look nice today.' },
    { id: '0002', title: 'Gruppe 2', desc: 'I know, right?!' },
  ]);

export default class AllGroupsContainer extends Component {
  constructor() {
    super();
    this.state = { groups: [] };
  }

  componentDidMount() {
    fetchSomeGroups(groups =>
    this.setState({ groups: groups }));
  }

  render() {
    return (
      <UserGroups groups={ this.state.groups } />
    );
  }
}
