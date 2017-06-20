import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

class UserGroups extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='groups'>
        {this.props.groups.map(group => (
          <Card key={ group._id } className='card'>
            <CardTitle title={ group.name } />
            <CardText>{ group.description }</CardText>
          </Card>
        ))}
      </div>
    );
  }
}

export default UserGroups
