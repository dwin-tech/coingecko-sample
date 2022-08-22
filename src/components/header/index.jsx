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
            <span>{coins.active_cryptocurrencies}</span>{" "}
          </li>
          <li>
            Exchanges:
            <span>{coins.markets}</span>
          </li>
          <li>
            Market Cap: <span>{coins.total_market_cap}</span>
            <span>{coins.market_cap_change_percentage_24h_usd}</span>
          </li>
          <li>
            24h Vol: <span>${coins.total_volume}</span>
          </li>
          <li>
            Dominance: <span>{coins.market_cap_percentage}% ETH</span>
            <span>{coins.market_cap_percentage_eth}%</span>
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
