import React from 'react';

const EventList = props => (
  <ul className='tile-list'>
    {props.events.map(event => (
      <li key={ event.id } className='tile'>{event.title}</li>
    ))}
  </ul>
);

export default EventList;
