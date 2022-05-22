import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import StoreCMS from '../../components/StoreCMS/StoreCMS';
import EventsCMS from '../../components/EventsCMS/EventsCMS';

import './styles.scss';
import './query.scss';

const CMS = () => {
  const [switchCMS, setSwitchCMS] = useState(false);

  return (
    <main className='cms-wrapper'>
      <nav>
        <ul className='cms-nav'>
          <li>
            <Link 
              to='/'
              onClick={() => setSwitchCMS(prev => !prev)}
              >
              Edit Events
            </Link>
          </li>
          <li>
            <Link 
              to='/'
              onClick={() => setSwitchCMS(prev => !prev)}
            >
              Edit Products
            </Link>
          </li>
        </ul>
      </nav>

      <section className='cms-selection'>
        {switchCMS ? <StoreCMS /> : <EventsCMS />}
      </section>
    </main>
  );
};

export default CMS;