import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style.module.scss";
import image from "../../images/coingeckoIcon.png";
import data from "./data";

function Footer() {
  function footerLists(array) {
    return array.map((e) => {
      return (
        <div className={style.containerOfFooterAllLists} key={e.id}>
          <NavLink to="/comingSoon" key={e.id} className={style.footerAllLists}>
            {e}
          </NavLink>
        </div>
      );
    });
  }

  return (
    <div className={style.footerComponents}>
      <div>
        <img src={image} alt="coin-icon" />
        <div className={style.footerTexts}>
          <p>
            CoinGecko provides a fundamental analysis of the crypto market. In
            addition to tracking price, volume and market capitalisation,
            CoinGecko tracks community growth, open-source code development,
            major events and on-chain metrics.
          </p>
          <div className={style.helpCenterAndTermsOfServiceItems} />
          <p>© 2022 CoinGecko. All Rights Reserved.</p>
        </div>
      </div>

      <div className={style.footerLIsts}>
        <div>{footerLists(data.exploreArray)}</div>
        <div>{footerLists(data.resourcesArray)}</div>
        <div>{footerLists(data.aboutCoinGeckoArray)}</div>
        <div>{footerLists(data.communityArray)}</div>
      </div>
      <div className={style.inputContainer}>
        <p>Interested to stay up-to-date with cryptocurrencies?</p>
        <p>
          Get the latest crypto news, updates, and reports by subscribing to our
          free newsletter.
        </p>
        <input type="email" placeholder="Enter your Enter" />
        <button type="submit" className={style.subscribeButton}>
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Footer;
