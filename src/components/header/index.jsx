/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import { useDispatch } from "react-redux";
import BasicPopover from "./lenguagePopover";
import style from "./style.module.scss";
import "../../styles/style.scss";
import coinsThunk from "../../thunks/coins-thunk";
import BasicCryptoPopover from "./cryptoCurrenceisPopover";

function Header({ coins }) {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    coinsThunk(dispatch);
  }, []);
  return (
    <div className={style.header}>
      <div className={style.headerMembers}>
        <ul>
          <li>
            Coins:
            <span>{coins.activeCryptocurrencies}</span>{" "}
          </li>
          <li>
            Exchanges:
            <span>{coins.markets}</span>
          </li>
          <li>
            Market Cap: <span>{coins.totalMarketCap}</span>
            <span>{coins.marketCapChangePercentage24hUsd}</span>
          </li>
          <li>
            24h Vol: <span>${coins.totalVolume}</span>
          </li>
          <li>
            Dominance: <span>{coins.marketCapPercentage}% ETH</span>
            <span>{coins.marketCapPercentageEth}%</span>
          </li>
          <li>
            Gas:
            <span>{coins.gas}</span>
          </li>
        </ul>
      </div>
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

Header.propTypes = {
  coins: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Header;
