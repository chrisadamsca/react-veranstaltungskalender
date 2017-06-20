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

  quitGroup() {
    console.log("pimmmel");
  }

  render() {
    return (
      <div className='groups'>
        {this.groups.map(group => (
          <Card key={ group._id } className='card'>
            <CardTitle title={ group.name } />
            <CardText>{ group.description }</CardText>
            <IconButton onClick={ this.quitGroup }>
              <FontIcon className='material-icons'>remove_circle</FontIcon>
            </IconButton>
          </Card>
        ))}
      </div>
    );
  }
}

export default UserGroups
