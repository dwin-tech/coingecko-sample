import React from "react";
import SortedByComponenet from "../sortedBy";
import CoinsMarketsComponent from "../coinsMarketsComponents";
import PriceByMarketCap from "../pricesByMarketCap";

function TreeComponents() {
  return (
    <div>
      <PriceByMarketCap />
      <SortedByComponenet />
      <CoinsMarketsComponent />
    </div>
  );
}
export default TreeComponents;
