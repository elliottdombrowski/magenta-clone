import React from 'react';

import './styles.scss';
import './query.scss';

const EventsCMS = () => {
  return (
    <main className='events-cms-wrapper'>
      <section className='create-event'>
        <form>
          <input
            type='date'
            required
          />

          <input
            type='text'
            placeholder='location'
            required
          />

          <input
            type='text'
            placeholder='address'
            required
          />

          <input
            type='text'
            placeholder='details'
          />

          <button
            type='submit'
            className='events-submit'
          >
            Create New Event
          </button>
        </form>
      </section>

      <section className='events-list'>
      
      </section>
    </main>
  );
};

export default EventsCMS;