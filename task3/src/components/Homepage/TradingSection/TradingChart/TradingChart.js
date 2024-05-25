import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';


import undoIcon from '../../../../utils/images/undo.png';
import redoIcon from '../../../../utils/images/redo.png';
import dividerIcon from '../../../../utils/images/divider.png';
import candleIcon from '../../../../utils/images/Candle Chart 1.png';

const TradingChart = ({selectedPair}) => {
  const [activeInterval, setActiveInterval] = useState('1H');
  const [candlestickData, setCandlestickData] = useState([]);

  const handleIntervalClick = (interval) => {
    setActiveInterval(interval);
    updateChart(interval);
  };

  const fetchCandlestickData = async (interval) => {
    const symbol = selectedPair; 
    let binanceInterval;
    switch (interval) {
      case '1H': binanceInterval = '1h'; break;
      case '2H': binanceInterval = '2h'; break;
      case '4H': binanceInterval = '4h'; break;
      case '1D': binanceInterval = '1d'; break;
      case '1W': binanceInterval = '1w'; break;
      case '1M': binanceInterval = '1M'; break;
      default: binanceInterval = '1d';
    }

    try {
      const response = await axios.get(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${binanceInterval}&limit=100`);
      const formattedData = response.data.map(candle => ({
        x: new Date(candle[0]),
        y: [parseFloat(candle[1]), parseFloat(candle[2]), parseFloat(candle[3]), parseFloat(candle[4])]
      }));
      setCandlestickData(formattedData);
    } catch (error) {
      console.error('Error fetching candlestick data:', error);
    }
  };

  const updateChart = (interval) => {
    fetchCandlestickData(interval);
  };

  useEffect(() => {
    updateChart(activeInterval);
  }, [selectedPair]);

  return (
    <section className="trading-chart">
      <div className="trading-chart_keys d-flex_h">
        <h5>Time</h5>
        {['1H', '2H', '4H', '1D', '1W', '1M'].map(interval => (
          <h5
            key={interval}
            data-interval={interval}
            className={`interval ${activeInterval === interval ? 'active' : ''}`}
            onClick={() => handleIntervalClick(interval)}
          >
            {interval}
          </h5>
        ))}
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
      <Chart
        options={{
          chart: { type: 'candlestick' },
          xaxis: { type: 'datetime' },
          yaxis: { 
            opposite: true,
            labels: {
              show: true,
              formatter: value => value.toFixed(2),
            },
            axisBorder: {
              show: true,
            },
            axisTicks: {
              show: true,
            },
          },
          grid: {
            show: true,
            yaxis: {
              lines: {
                show: false, // Disable Y-axis grid lines
              },
            },
          },
        }}
        series={[{ data: candlestickData }]}
        type="candlestick"
        height={350}
      />
    </section>
  )
}

export default TradingChart