import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "./style.module.scss";
import HideOrReadMoreComponent from "./hideOrReadMoreComponent/index";
import IOSSwitch from "../general/switch/index";

function PriceByMarketCap() {
  const [toggleSWitch, setToggleSwitch] = useState(false);
  const toggler = () => {
    setToggleSwitch(!toggleSWitch);
  };
  const pricesByMarkCap = useSelector((state) => state.coins);
  return (
    <div className={style.priceByMarketCap}>
      <div className={style.switchButtonAndText}>
        <h2 className={style.textMarketCap}>
          Cryptocurrency Prices by Market Cap{" "}
        </h2>
        <IOSSwitch onClick={toggler} />
        <h4>Show status</h4>
      </div>

      {toggleSWitch ? (
        <div>
          <HideOrReadMoreComponent className={style.pricesByMarkCapText} />
          <div className={style.globalData}>
            <div>
              <p>${pricesByMarkCap.totalMarketCap}</p>
              <p>Market Capitalization</p>
            </div>
            <div>
              <p>${pricesByMarkCap.totalVolume}</p>
              <p>24h Trading Volume</p>
            </div>
            <div>
              <p>{pricesByMarkCap.marketCapPercentage}%</p>
              <p>Bitcoin Market Cap Dominance</p>
            </div>
            <div>
              <p>{pricesByMarkCap.activeCryptocurrencies}</p>
              <p># of Coins</p>
            </div>
          </div>
        </div>
      ) : (
        <HideOrReadMoreComponent />
      )}
      <div className={style.showFDV}>
        <IOSSwitch />
        <p>Show Fully Diluted Valuation</p>
      </div>
    </div>
  );
}

export default PriceByMarketCap;
