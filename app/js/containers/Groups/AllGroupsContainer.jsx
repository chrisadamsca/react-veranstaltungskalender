import React, { Component } from 'react';
import AllGroups from '../../components/Groups/AllGroups';

export default class AllGroupsContainer extends Component {
  constructor() {
    super();
    this.state = { groups: [] };
  }

  componentDidMount() {
    const req = new XMLHttpRequest();
    req.open('GET', '/api/group', true);
    req.responseType = 'json';

    req.onload = () => {
      if (req.status >= 200 && req.status < 400) {
        // Success!
        const res = req.response;
        this.setState({
          groups: res,
        });
      } else {
        // We reached our target server, but it returned an error
      }
    };

    req.onerror = () => {
      // There was a connection error of some sort
    };

    req.send();
  }

  render() {
    return (
      <AllGroups groups={ this.state.groups } />
    );
  }
}
