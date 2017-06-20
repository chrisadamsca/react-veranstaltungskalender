import React, { Component } from 'react';
import UserEventList from '../../components/Events/UserEvents';

export default class UserEventListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <UserEventList events={ this.props.events } cancelEvent={ this.props.cancelEvent } />
    );
  }
}
