import "./App.css";
import React from "react";
import HeaderContainer from "./container/headerContainer";
import PriceByMarketCap from "./components/pricesByMarketCap";
import CoinsMarketsContainer from "./container/coins-markets";

function App() {
  return (
    <div>
      <HeaderContainer />
      <PriceByMarketCap />
      <CoinsMarketsContainer />
    </div>
  );
}

export default App;
