import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import Auth from "./components/Auth/Auth";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [selectedPair, setSelectedPair] = useState('BTCUSDT');
    const [tradingPairs, setTradingPairs] = useState([]);

    useEffect(() => {
        fetchTradingPairs();
    }, []);

    const fetchTradingPairs = async () => {
        try {
            const response = await axios.get('https://api.binance.com/api/v3/ticker/24hr');
            setTradingPairs(response.data);
        } catch (error) {
            console.error('Error fetching trading pairs:', error);
        }
    };

    const handlePairChange = (event) => {
      setSelectedPair(event.target.value);
    };
    
  return (
    <section className="app">
      <Header handlePairChange={handlePairChange} selectedPair={selectedPair} tradingPairs={tradingPairs} />

      <Routes>
        <Route path="/" element={<Homepage selectedPair={selectedPair} />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>

      <Footer />
    </section>
  );
}

export default App;
