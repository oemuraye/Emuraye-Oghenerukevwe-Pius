import React, { useEffect, useState } from 'react';

import coinImg from '../../utils/images/btc_usdt-img.png';
import axios from 'axios';

const CoinInfo_Section = ({handlePairChange, selectedPair, tradingPairs}) => {
    const selectedPairData = tradingPairs.find(pair => pair.symbol === selectedPair);
    console.log(selectedPairData);
  return (
    <section className="coin-info_section d-flex_h">
        <div className="coin-select d-flex_h">
            <img src={coinImg} alt="coin-img" />
            <select onChange={handlePairChange} value={selectedPair}>
                {tradingPairs.map((pair) => (
                    <option key={pair.symbol} value={pair.symbol}>
                        {pair.symbol} 
                    </option>
                ))}
            </select>
            <span className="coin-price">${selectedPairData ? selectedPairData.lastPrice : 'Loading...'}</span>
        </div>

        <ul className="price-info d-flex_h">
            <li>
                <div className="prices d-flex_v">
                    <span class="d-flex_h">
                        <i className="fa-regular fa-clock"></i>
                        24h change
                    </span>
                    <span className="price-percentage increase-color">540.80 +1.25%</span>
                </div>
            </li>
            <li>
                <div className="prices d-flex_v">
                    <span class="d-flex_h">
                        <i className="fa fa-arrow-up" aria-hidden="true"></i>
                        24h high
                    </span>
                    <span className="price-percentage">540.80 +1.25%</span>
                </div>
            </li>
            <li>
                <div className="prices d-flex_v">
                    <span class="d-flex_h">
                        <i className="fa fa-arrow-down" aria-hidden="true"></i>
                        24h low
                    </span>
                    <span className="price-percentage">540.80 +1.25%</span>
                </div>
            </li>
            <li>
                <div className="prices d-flex_v">
                    <span class="d-flex_h">
                        <i className="fa-regular fa-chart-bar"></i>
                        24h volume
                    </span>
                    <span className="price-percentage">540.80 +1.25%</span>
                </div>
            </li>
        </ul>
    </section>
  )
}

export default CoinInfo_Section