import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const AllEventList = state => (
  <div className='cards'>
    {state.events.map(event => (
      <Card key={ event._id } className='card'>
        <CardTitle title={ event.name } />
        <CardText>{ event.description }</CardText>
      </Card>
    ))}
  </div>
);

export default AllEventList;
