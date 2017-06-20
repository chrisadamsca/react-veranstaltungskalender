import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

const OtherEventList = ({ events, attendEvent }) => (
  <div className='cards'>
    {events.map(event => (
      <Card key={ event._id } className='card'>
        <CardTitle title={ event.name } />
        <CardText>{ event.description }</CardText>
        <IconButton onTouchTap={ () => attendEvent(event._id) } >
          <FontIcon className='material-icons'>done</FontIcon>
        </IconButton>
      </Card>
    ))}
  </div>
);

export default OtherEventList;
