import React from 'react';

import undoIcon from '../../../../utils/images/undo.png';
import redoIcon from '../../../../utils/images/redo.png';
import dividerIcon from '../../../../utils/images/divider.png';
import candleIcon from '../../../../utils/images/Candle Chart 1.png';
import tradingViewImg from '../../../../utils/images/Trading view.png';

const TradingChart = () => {
  return (
    <section className="trading-chart">
        <div className="trading-chart_keys d-flex_h">
            div<h5>Time</h5>
            <h5 data-interval="1H" className="interval">1H</h5>
            <h5 data-interval="2H" className="interval">2H</h5>
            <h5 data-interval="4H" className="interval">4H</h5>
            <h5 data-interval="1D" className="interval active">1D</h5>
            <h5 data-interval="1W" className="interval">1W</h5>
            <h5 data-interval="1M" className="interval">1M</h5>
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