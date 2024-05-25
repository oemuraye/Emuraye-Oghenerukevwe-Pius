import React from 'react';


import TradingChart from './TradingChart/TradingChart';
import TradingStats from './TradingStats/TradingStats';

import './tradingSection.css';

const TradingSection = ({selectedPair}) => {
  return (
    <section className="trading-section">
      <TradingChart selectedPair={selectedPair} />     
      <TradingStats selectedPair={selectedPair} />
    </section>
  )
}

export default TradingSection