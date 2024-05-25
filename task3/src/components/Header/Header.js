import React from 'react';
import { useLocation } from 'react-router-dom';


import './header.css';
import Navbar from './Navbar';
import CoinInfo_Section from './CoinInfo_Section';

const Header = ({handlePairChange, selectedPair, tradingPairs}) => {
  const location = useLocation();

  const hideCoinSection = location.pathname === '/auth'

  return (
    <section className='home-header'>
        <Navbar />
        {!hideCoinSection && <CoinInfo_Section handlePairChange={handlePairChange} selectedPair={selectedPair} tradingPairs={tradingPairs} />}
    </section>
  )
}

export default Header;