import React, { Component } from 'react';
import OtherGroups from '../../components/Groups/OtherGroups';

export default class OtherGroupsContainer extends Component {
  constructor() {
    super();
    this.state = { groups: [] };
  }

  componentDidMount() {
    const req = new XMLHttpRequest();
    req.open('GET', '/api/group/user/' + JSON.parse(localStorage.getItem('currentUser')).userID, true);
    req.responseType = 'json';

    req.onload = () => {
      if (req.status >= 200 && req.status < 400) {
        // Success!
        const res = req.response;
        console.log(res);
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
      <OtherGroups groups={ this.state.groups } />
    );
  }
}
