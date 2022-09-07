/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect } from "react";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import { useDispatch, useSelector } from "react-redux";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import NorthIcon from "@mui/icons-material/North";
import BasicPopover from "./lenguagePopover";
import style from "./style.module.scss";
import coinsThunk from "../../thunks/coins-thunk";
import BasicCryptoPopover from "./cryptoCurrenceisPopover";

function Header() {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins);
  const coinsArray = [
    { name: "Coins:", price: coins.activeCryptocurrencies },
    { name: "Exchanges:", price: coins.markets },
    { name: "Market Cap:", price: coins.totalMarketCap },
    { name: " ", price: coins.marketCapChangePercentage24hUsd, isGreen: true },
    { name: "24h Vol: ", price: coins.totalVolume },
    { name: "Dominance: ", price: coins.marketCapPercentage },
    { name: " ETH", price: coins.marketCapPercentageEth },
    { name: "Gas:", price: coins.gas },
  ];
  const array = coinsArray.map((e) => {
    return (
      <div key={e.id}>
        <div className={style.headerMembers}>
          <p>{e.name}</p>
          {e.isGreen ? (
            <div>
              {e.price < 0 ? (
                <div className={style.priceAndIcon}>
                  <p className={style.red}>{e.price}</p>
                  <p>
                    <ArrowDownwardIcon className={style.iconRed} />
                  </p>
                </div>
              ) : (
                <div className={style.priceAndIcon}>
                  <p className={style.green}>{e.price}</p>
                  <p>
                    <NorthIcon className={style.iconGreen} />
                  </p>
                </div>
              )}
            </div>
          ) : (
            <p>{e.price}</p>
          )}
        </div>
      </div>
    );
  });
  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    coinsThunk(dispatch);
  }, []);
  return (
    <div className={style.header}>
      <div className={style.pricesAndNames}>{array}</div>
      <div className={style.darkModAndEn}>
        <BasicPopover className="enAndBTCButton" />
        <BasicCryptoPopover className="enAndBTCButton" />
        <NightlightRoundIcon />
        <button type="submit" className={style.headerSubscribeButton}>
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Header;
