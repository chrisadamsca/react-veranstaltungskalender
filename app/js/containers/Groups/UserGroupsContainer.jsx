import React, { Component } from 'react';
import UserGroups from '../../components/Groups/UserGroups';

export default class UserGroupsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <UserGroups groups={ this.props.groups } exitGroup={ this.props.exitGroup } />
      </div>
    );
  }
}
