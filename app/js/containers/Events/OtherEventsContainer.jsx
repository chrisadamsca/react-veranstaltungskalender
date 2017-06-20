import React, { Component } from 'react';
import OtherEventList from '../../components/Events/OtherEvents';

export default class OtherEventListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <OtherEventList events={ this.props.events } attendEvent={ this.props.attendEvent } />
    );
  }
}
