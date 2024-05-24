import React from 'react';


import TradingChart from './TradingChart/TradingChart';
import TradingStats from './TradingStats/TradingStats';

import './tradingSection.css';

const TradingSection = () => {
  return (
    <section className="trading-section">
      <TradingChart />     
      <TradingStats />
    </section>
  )
}

export default TradingSection