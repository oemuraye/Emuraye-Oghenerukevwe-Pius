import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <section className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>

      <Footer />
    </section>
  );
}

export default App;
