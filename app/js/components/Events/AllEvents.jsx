import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const AllEventList = props => (
  <div className='cards'>
    {props.events.map(event => (
      <Card key={ event.id } className='card'>
        <CardTitle title={ event.title } />
        <CardText>{ event.desc }</CardText>
      </Card>
    ))}
  </div>
);

export default AllEventList;
