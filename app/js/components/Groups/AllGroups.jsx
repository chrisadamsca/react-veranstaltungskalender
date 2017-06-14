import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const AllGroups = props => (
  <div className='groups'>
    {props.groups.map(group => (
      <Card key={ group.id } className='card'>
        <CardTitle title={ group.title } />
        <CardText>{ group.desc }</CardText>
      </Card>
    ))}
  </div>
);

export default AllGroups;
