import React from "react";
import SortedByComponenet from "../sortedBy";
import CoinsMarketsContainer from "../../container/coins-markets";
import PriceByMarketCap from "../pricesByMarketCap";

function TreeComponents() {
  return (
    <div>
      <PriceByMarketCap />
      <SortedByComponenet />
      <CoinsMarketsContainer />
    </div>
  );
}
export default TreeComponents;
