import React, { useEffect, useState } from 'react';
import axios from 'axios';
import filterIcon1 from '../../../../utils/images/filter1.png';
import filterIcon2 from '../../../../utils/images/filter2.png';
import filterIcon3 from '../../../../utils/images/filter3.png';

const TradingStats = ({selectedPair}) => {
    const [activeTab, setActiveTab] = useState('trading-stats_tab1');
    const [orderBook, setOrderBook] = useState({ bids: [], asks: [] });
    const [limit, setLimit] = useState('3');

    const handleLimitChange = (event) => {
      setLimit(event.target.value);
    };

    useEffect(() => {
        fetchOrderBook(selectedPair);
    }, [selectedPair, limit]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const fetchOrderBook = async (pair) => {
        try {
            const response = await axios.get(`https://api.binance.com/api/v3/depth?symbol=${pair}&limit=${limit}`);
            setOrderBook(response.data);
        } catch (error) {
            console.error('Error fetching order book:', error);
        }
    };


  return (
    <section className="trading-stats">
      <div className="trading-stats_tab">
        <div
          data-tab="order-tab"
          className={` ${activeTab === 'trading-stats_tab1' ? 'active' : ''}`}
          onClick={() => handleTabClick('trading-stats_tab1')}
        >
          <h6>Order Book</h6>
        </div>
        <div
          data-tab="trade-tab"
          className={` ${activeTab === 'trading-stats_tab2' ? 'active' : ''}`}
          onClick={() => handleTabClick('trading-stats_tab2')}
        >
          <h6>Recent Trades</h6>
        </div>
      </div>

      <div id="order-tab" className={`trading_tab-content ${activeTab === 'trading-stats_tab1' ? 'active' : ''}`}>
        <section className="order-tab_filter d-flex_h__between">
          <div className="success-filter d-flex_h">
            <img className="active" src={filterIcon1} alt="filter-icon" />
            <img src={filterIcon2} alt="filter-icon" />
            <img src={filterIcon3} alt="filter-icon" />
          </div>
          <div className="num-filter d-flex_h">
            <select onChange={handleLimitChange} value={limit}>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
        </section>

        <section className="order-records_table">
          <div className="order-records__title d-flex_h">
            <div>
              <h6>Price</h6>
              <span>(USDT)</span>
            </div>
            <div>
              <h6>Amounts</h6>
              <span>(BTC)</span>
            </div>
            <div>
              <h6>Total</h6>
            </div>
          </div>

          <section className="order-records_details downward_decrease d-flex_v">
            {orderBook.bids.map((bid, index) => (
              <div className="d-flex_h" key={index}>
                <div>
                  <h6 className="records__row1">{bid[0]}</h6>
                </div>
                <div>
                  <h6 className="records__row2">{bid[1]}</h6>
                </div>
                <div>
                  <h6 className="records__row3">{(bid[0] * bid[1]).toFixed(2)}</h6>
                </div>
                <div className="progress_red progress_width-30"></div>
              </div>
            ))}
          </section>

          <section class="order-records_summary d-flex_h">
              <h4 class="success_increase">36,642.20</h4>
              <i class="fa fa-arrow-up success_increase" aria-hidden="true"></i>
              <h4 class="downward_decrease">36,642.20</h4>
          </section>

          <section className="order-records_details success_increase d-flex_v">
            {orderBook.asks.map((ask, index) => (
              <div className="d-flex_h" key={index}>
                <div>
                  <h6 className="records__row1">{ask[0]}</h6>
                </div>
                <div>
                  <h6 className="records__row2">{ask[1]}</h6>
                </div>
                <div>
                  <h6 className="records__row3">{(ask[0] * ask[1]).toFixed(2)}</h6>
                </div>
                <div className="progress_green progress_width-50"></div>
              </div>
            ))}
          </section>
        </section>
      </div>

      <div id="trade-tab" className={`trading_tab-content ${activeTab === 'trading-stats_tab2' ? 'active' : ''}`}>
        <h2>Recent Trades Content</h2>
        <p>This is the content for the Recent Trades tab.</p>
      </div>
    </section>
  );
};

export default TradingStats;