import React, { Component } from 'react';
import OtherGroups from '../../components/Groups/OtherGroups';

export default class OtherGroupsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <OtherGroups groups={ this.props.groups } enterGroup={ this.props.enterGroup } />
    );
  }
}
