import React from 'react';

const AllEventList = props => (
  <ul className='tile-list'>
    {props.events.map(event => (
      <li key={ event.id } className='tile'>{event.title}</li>
    ))}
  </ul>
);

export default AllEventList;
