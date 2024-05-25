import React, { useState } from 'react';

import coinImg from '../../../../utils/images/btc_usdt-img.png';

import './searchInput.css';


const SearchSection = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (event) => {
      setSearchValue(event.target.value.toLowerCase());
    };
  
    const tradingPairs = [
      { name: 'BTC/USDT', price: '$23,234.6', change: '$23,234.6' },
      { name: 'ETH/USD', price: '$23,234.6', change: '$23,234.6' },
      { name: 'BTC/EUR', price: '$23,234.6', change: '$23,234.6' },
      { name: 'BTC/GBP', price: '$23,234.6', change: '$23,234.6' },
      { name: 'ETH/GBP', price: '$23,234.6', change: '$23,234.6' },
    ];
  
    const filteredPairs = tradingPairs.filter(pair => pair.name.toLowerCase().includes(searchValue));
  
    return (
      <section className="search_section">
        <h5>Select Market</h5>
        <div className="search-input-container">
          <i className="fa fa-search search-icon"></i>
          <input type="text" id="searchInput" className="search-input" placeholder="Search" value={searchValue} onChange={handleSearch}  />
        </div>
  
        <div className="filter-keys d-flex_h">
          <h5 className="filter-all active">All</h5>
          <h5 className="filter-usd">USDT</h5>
          <h5 className="filter-btc">BTC</h5>
        </div>
  
        <ul className="filter-trades trading-pairs-list d-flex_v">
          {filteredPairs.map((pair, index) => (
            <li className="filtered-details" key={index}>
              <div className="d-flex_h">
                <img src={coinImg} alt="coin-img" width="30px" />
                <h5>{pair.name}</h5>
              </div>
              <div className="d-flex_h">
                <span>{pair.price}</span>
                <span className="success_increase">{pair.change}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  };

export default SearchSection;