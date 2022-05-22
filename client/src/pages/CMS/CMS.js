import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import StoreCMS from '../../components/StoreCMS/StoreCMS';
import EventsCMS from '../../components/EventsCMS/EventsCMS';

import './styles.scss';
import './query.scss';

const CMS = () => {
  return (
    <main className='cms-wrapper'>
      <nav>
        <ul className='cms-nav'>
          <li>
            <Link to='/'>
              Edit Events
            </Link>
          </li>
          <li>
            <Link to='/'>
              Edit Products
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default CMS;