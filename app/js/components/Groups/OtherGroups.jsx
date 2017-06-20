import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

class OtherGroups extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  enterGroup() {
    console.log("Enter group");
  }

  render() {
    return (
      <div className='groups'>
        {this.props.groups.map(group => (
          <Card key={ group._id } className='card'>
            <CardTitle title={ group.name } />
            <CardText>{ group.description }</CardText>
            <IconButton className='cardButton' onTouchTap={ this.enterGroup }>
              <FontIcon className='material-icons'>add_box</FontIcon>
            </IconButton>
          </Card>
        ))}
      </div>
    );
  }
}

export default OtherGroups
