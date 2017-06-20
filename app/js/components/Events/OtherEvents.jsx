import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

class OtherEventList extends Component {
  constructor(props) {
    super(props);
  }

  participateEvent() {
    console.log('Event accept');
  }

  declineEvent() {
    console.log('Event declined');
  }

  render() {
    return (
      <div className='cards'>
        {this.props.events.map(event => (
          <Card key={ event._id } className='card'>
            <CardTitle title={ event.name } />
            <CardText>{ event.description }</CardText>
            <IconButton onTouchTap={ this.participateEvent }>
              <FontIcon className='material-icons'>done</FontIcon>
            </IconButton>
            <IconButton onTouchTap={ this.declineEvent }>
              <FontIcon className='material-icons'>clear</FontIcon>
            </IconButton>
          </Card>
        ))}
      </div>
    );
  }
}

export default OtherEventList;
