import { getFeaturedEvents } from '../dummy-data.js';
import EventList from '../components/events/event-list.js';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
};

export default HomePage;
