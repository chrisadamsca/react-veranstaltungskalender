import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

const UserEventList = ({ events, cancelEvent }) => (
  <div className='cards'>
    {events.map(event => (
      <Card key={ event._id } className='card'>
        <CardTitle title={ event.name } />
        <CardText>{ event.description }</CardText>
        <IconButton onTouchTap={ () => cancelEvent(event._id) } >
          <FontIcon className='material-icons'>clear</FontIcon>
        </IconButton>
      </Card>
    ))}
  </div>
);

export default UserEventList;
