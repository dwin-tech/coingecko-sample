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
  const pricesByMarkCap = useSelector(function (state) {
    return state.coins;
  });

  const text = `The global cryptocurrency market cap today is $1.19 Trillion, a ${pricesByMarkCap.marketCapChangePercentage24hUsd}change in the last 24 hours. Total cryptocurrency trading volume in the  last day is at $84.4 Billion. Bitcoin dominance is at 38.3% and Ethereum dominance is at 19%. CoinGecko is now tracking 12,954 cryptocurrencies. Popular trends of the industry right now are DeFi and Play to Earn.`;

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
          <HideOrReadMoreComponent
            text={text}
            className={style.pricesByMarkCapText}
          />
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
        <HideOrReadMoreComponent text={text} />
      )}
    </div>
  );
}

export default PriceByMarketCap;
