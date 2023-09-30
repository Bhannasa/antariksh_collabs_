import React from 'react';
import './Event.css';



function Event(props) {
  return (
    <div className='Event'>
      <div className='EventImageContainer' style={{
        backgroundImage: `url(${props.photo})`, 
        backgroundPosition: 'center',
        backgroundSize: 'cover'
        }}></div>
      <div className='EventName'>{props.name}</div>
      <div className='EventDescription'>{props.description}</div>
    </div>
  );
}

export default Event;
