import React, { useEffect, useState } from 'react';

import exclamationIcon from '../../../utils/images/exclamation.png';

import './aside.css'
import SearchSection from './SearchSection/SearchSection';

const Aside = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [activeBuyTab, setActiveBuyTab] = useState('buy-tab1');
    const [limitPrice, setLimitPrice] = useState('');
    const [amount, setAmount] = useState('');
    const [totalValue, setTotalValue] = useState('0.00');
  
    useEffect(() => {
    const price = parseFloat(limitPrice);
    const quantity = parseFloat(amount);

    if (!isNaN(price) && !isNaN(quantity)) {
        const total = price * quantity;
        setTotalValue(total.toFixed(2));
        } else {
        setTotalValue('0.00');
        }
    }, [limitPrice, amount]);
        
    const handleLimitPriceChange = (e) => {
        setLimitPrice(e.target.value.trim());
    };

    const handleAmountChange = (e) => {
    setAmount(e.target.value.trim());
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleBuyTabClick = (tab) => {
        setActiveBuyTab(tab);
    };
  return (
    <aside>
      <section className="tabs">
      <div className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab1')}>
          Buy
        </div>
        <div className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab2')}>
          Sell
        </div>
      </section>

      <section id="tab1" className={`tab-content ${activeTab === 'tab1' ? 'active' : ''}`}>
          <section className="buy-tab_section">
              <section className="d-flex_h">
                <div className={`buy-tab1 ${activeBuyTab === 'buy-tab1' ? 'active' : ''}`}
                        onClick={() => handleBuyTabClick('buy-tab1')}> 
                    Limit
                    </div>
                    <div className={`buy-tab2 ${activeBuyTab === 'buy-tab2' ? 'active' : ''}`}
                        onClick={() => handleBuyTabClick('buy-tab2')}>
                    Market
                    </div>
                    <div className={`buy-tab3 ${activeBuyTab === 'buy-tab3' ? 'active' : ''}`}
                        onClick={() => handleBuyTabClick('buy-tab3')}>
                    Stop-Limit
                    </div>
              </section>

              <section id="limit-tab" className={`buy-tab_content d-flex_v ${activeBuyTab === 'buy-tab1' ? 'active' : ''}`}>
                  <div className="limit-tab">
                      <div className="d-flex_h">
                          <span>Limit price</span>
                          <img src={exclamationIcon} alt="icon" />
                      </div>
                      <input onChange={handleLimitPriceChange} id="limit-price" type="number" placeholder="0.00 USD" />
                  </div>
                  <div className="limit-tab">
                      <div className="d-flex_h">
                          <span>Amount</span>
                          <img src={exclamationIcon} alt="icon" />
                      </div>
                      <input onChange={handleAmountChange } id="amount" type="number" placeholder="0.00 USD" />
                  </div>
                  <div className="limit-tab">
                      <div className="d-flex_h">
                          <span>Type</span>
                          <img src={exclamationIcon} alt="icon" />
                      </div>
                      <div className="d-flex_h">
                          <select>
                              <option>Good till cancelled</option>
                              <option>Fill or kill</option>
                              <option>Good till date</option>
                          </select>
                          {/* <!-- <i className="fa fa-angle-down" aria-hidden="true"></i> --> */}
                      </div>
                  </div>
                  
                  <div className="post-checkbox d-flex_h">
                        <input type="checkbox" defaultChecked />
                        <span>Post Only</span>
                        <img src={exclamationIcon} alt="icon" />
                    </div>

              
                  <div className="purchase_section d-flex_v">
                      <div className="d-flex_h__between">
                          <h4>Total</h4>
                          <h4 id="total-value">{totalValue}</h4>
                      </div>
                      <div className="purchase-btn">
                          <button>Buy BTC</button>
                      </div>
                  </div>
              
                  <hr />
              
                  <div className="purchase-info d-flex_v">
                      <div className="d-flex_h__between">
                          <h6>Total account value</h6>
                          <h6>NGN <i className="fa fa-angle-down" aria-hidden="true"></i></h6>
                      </div>
                      <h5 id="total-value2">{totalValue}</h5>
                  </div>
              
                  <div className="purchase-info d-flex_v">
                      <div className="d-flex_h__between">
                          <h6>Open Orders</h6>
                          <h6>Available</h6>
                      </div>
                      <h5>0.00</h5>
                  </div>
              
                  <button className="deposit-btn">Deposit</button>
              </section>
              

              <section id="market-tab" className={`buy-tab_content ${activeBuyTab === 'buy-tab3' ? 'active' : ''}`} ></section>
              <section id="stop_limit-tab" className={`tab-content ${activeTab === 'tab2' ? 'active' : ''}`} ></section>
          </section>
      </section>

        <section id="tab2" className={`tab-content ${activeTab === 'tab2' ? 'active' : ''}`}>
            <h2>Sell Content</h2>
        </section>

        <hr />

        <SearchSection />


    </aside>
  )
}

export default Aside