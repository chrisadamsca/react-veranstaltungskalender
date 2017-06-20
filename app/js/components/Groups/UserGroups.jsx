import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

class UserGroups extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  exitGroup() {
    console.log('Exit group');
  }

  render() {
    return (
      <div className='groups'>
        {this.props.groups.map(group => (
          <Card key={ group._id } className='card'>
            <CardTitle title={ group.name } />
            <CardText>{ group.description }</CardText>
            <IconButton onTouchTap={ this.exitGroup }>
              <FontIcon className='material-icons'>remove_circle</FontIcon>
            </IconButton>
          </Card>
        ))}
      </div>
    );
  }
}

export default UserGroups
