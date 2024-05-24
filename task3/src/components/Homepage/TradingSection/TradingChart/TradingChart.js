import React, { useEffect, useState } from 'react';

import undoIcon from '../../../../utils/images/undo.png';
import redoIcon from '../../../../utils/images/redo.png';
import dividerIcon from '../../../../utils/images/divider.png';
import candleIcon from '../../../../utils/images/Candle Chart 1.png';
import tradingViewImg from '../../../../utils/images/Trading view.png';

const TradingChart = () => {
  const [activeInterval, setActiveInterval] = useState('1D'); // Default active interval

  const handleIntervalClick = (interval) => {
    setActiveInterval(interval);
    updateChart(interval);
  };

  const updateChart = (interval) => {
    console.log('Updating chart with interval:', interval);
    // Code to get the chart
  };

  useEffect(() => {
    updateChart(activeInterval);
  }, []);

  return (
    <section className="trading-chart">
        <div className="trading-chart_keys d-flex_h">
            <h5>Time</h5>
            <h5 data-interval="1H" className={`interval ${activeInterval === '1H' ? 'active' : ''}`} 
              onClick={() => handleIntervalClick('1H')} >
              1H
            </h5>
            <h5 data-interval="2H" className={`interval ${activeInterval === '2H' ? 'active' : ''}`}
              onClick={() => handleIntervalClick('2H')} >
              2H
            </h5>
            <h5 data-interval="4H" className={`interval ${activeInterval === '4H' ? 'active' : ''}`}
              onClick={() => handleIntervalClick('4H')} >
              4H
            </h5>
            <h5 data-interval="1D" className={`interval ${activeInterval === '1D' ? 'active' : ''}`}
              onClick={() => handleIntervalClick('1D')} >
              1D
            </h5>
            <h5 data-interval="1W" className={`interval ${activeInterval === '1W' ? 'active' : ''}`}
              onClick={() => handleIntervalClick('1W')} >
              1W
            </h5>
            <h5 data-interval="1M" className={`interval ${activeInterval === '1M' ? 'active' : ''}`}
              onClick={() => handleIntervalClick('1M')} >
              1M
            </h5>
            <h5><i className="fa fa-angle-down" aria-hidden="true"></i></h5>
            <h5><img src={dividerIcon} alt="candle-chart_icon" /></h5>
            <h5><img src={candleIcon} alt="candle-chart_icon" /></h5>
            <h5><img src={dividerIcon} alt="candle-chart_icon" /></h5>
            <h5>Fx Indicators</h5>
            <h5><img src={dividerIcon} alt="candle-chart_icon" /></h5>
            <h5><img src={undoIcon} alt="candle-chart_icon" /></h5>
            <h5><img src={redoIcon} alt="candle-chart_icon" /></h5>
            <h5><img src={dividerIcon} alt="candle-chart_icon" /></h5>
        </div>
        <img src={tradingViewImg} alt="trading" width="100%" height="" />
    </section>
  )
}

export default TradingChart