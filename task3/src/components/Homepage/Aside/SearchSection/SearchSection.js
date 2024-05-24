import React from 'react';

import coinImg from '../../../../utils/images/btc_usdt-img.png';

import './searchInput.css';


const SearchSection = () => {
  return (
    <section class="search_section">
        <h5>Select Market</h5>
        <div class="search-input-container">
            <i class="fa fa-search search-icon"></i>
            <input type="text" id="searchInput" class="search-input" placeholder="Search" />
        </div>

        <div class="filter-keys d-flex_h">
            <h5 class="filter-all active">All</h5>
            <h5 class="filter-usd">USD</h5>
            <h5 class="filter-btc">BTC</h5>
        </div>

        <ul class="filter-trades trading-pairs-list d-flex_v">
            <li class="filtered-details">
                <div class="d-flex_h">
                    <img src={coinImg} alt="coin-img" width="30px" />
                    <h5>BTC/USDT</h5>
                </div>
                <div class="d-flex_h">
                    <span>$23,234.6</span>
                    <span class="success_increase">$23,234.6</span>
                </div>
            </li>
            <li class="filtered-details">
                <div class="d-flex_h">
                    <img src={coinImg} alt="coin-img" width="30px" />
                    <h5>ETH/USD</h5>
                </div>
                <div class="d-flex_h">
                    <span>$23,234.6</span>
                    <span class="success_increase">$23,234.6</span>
                </div>
            </li>
            <li class="filtered-details">
                <div class="d-flex_h">
                    <img src={coinImg} alt="coin-img" width="30px" />
                    <h5>BTC/EUR</h5>
                </div>
                <div class="d-flex_h">
                    <span>$23,234.6</span>
                    <span class="success_increase">$23,234.6</span>
                </div>
            </li>
            <li class="filtered-details">
                <div class="d-flex_h">
                    <img src={coinImg} alt="coin-img" width="30px" />
                    <h5>BTC/GBP</h5>
                </div>
                <div class="d-flex_h">
                    <span>$23,234.6</span>
                    <span class="success_increase">$23,234.6</span>
                </div>
            </li>
            <li class="filtered-details">
                <div class="d-flex_h">
                    <img src={coinImg} alt="coin-img" width="30px" />
                    <h5>ETH/GBP</h5>
                </div>
                <div class="d-flex_h">
                    <span>$23,234.6</span>
                    <span class="success_increase">$23,234.6</span>
                </div>
            </li>
        </ul>
    </section>
  )
}

export default SearchSection