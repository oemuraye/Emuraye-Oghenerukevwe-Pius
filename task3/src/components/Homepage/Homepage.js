import React from 'react';

import TradingSection from './TradingSection/TradingSection';
import SummarySection from './SummarySection/SummarySection';
import Aside from './Aside/Aside';

import './homePage.css';

const Homepage = () => {
  return (
    <main className='main-content'>
      <TradingSection />
      <SummarySection />
      <Aside />
    </main>
  )
}

export default Homepage;