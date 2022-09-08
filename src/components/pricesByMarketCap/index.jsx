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

  const arrayOfPricesByMarkCap = [
    {
      price: pricesByMarkCap.totalMarketCap,
      text: "Market Capitalization",
    },
    {
      price: pricesByMarkCap.totalVolume,
      text: "24h Trading Volume",
    },
    {
      price: pricesByMarkCap.marketCapPercentage,
      text: "Bitcoin Market Cap Dominance",
    },
    {
      price: pricesByMarkCap.activeCryptocurrencies,
      text: "# of Coins",
    },
  ];
  const array = arrayOfPricesByMarkCap.map((e) => {
    return (
      <div>
        <p>{e.price}</p>
        <p>{e.text}</p>
      </div>
    );
  });
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
          <div className={style.globalData}>{array}</div>
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
