import React from 'react';
import EventListItem from './event-list-item';
import classes from './event-list.module.css';

const EventList = (props) => {
  const { events = [] } = props;

  return (
    <ul className={classes.list}>
      {Array.isArray(events) &&
        events.length &&
        events.map((event) => <EventListItem key={event.id} event={event} />)}
    </ul>
  );
};

export default EventList;
