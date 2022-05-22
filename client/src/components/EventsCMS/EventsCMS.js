import React from 'react';

import './styles.scss';
import './query.scss';

const EventsCMS = () => {
  return (
    <main className='events-cms-wrapper'>
      <section className='create-event'>
        <form>
          <label for='eventDate'>Date<span>*</span></label>
          <input
            type='date'
            name='eventDate'
            required
          />

          <label for='eventLocation'>Location<span>*</span></label>
          <input
            type='text'
            name='eventLocation'
            placeholder='location'
            required
          />

          <label for='eventAddress'>Address<span>*</span></label>
          <input
            type='text'
            name='eventAddress'
            placeholder='address'
            required
          />

          <textarea
            className='cms-event-details'
            placeholder='event details'
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