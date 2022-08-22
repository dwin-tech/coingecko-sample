import React from "react";
import style from "./style.module.scss";

function Footer() {
  const exploreArray = [
    "Explore",
    "Bitcoin Price",
    "Ethereum Price",
    "DeFi Coins",
    "Metaverse Coins",
    "Gaming Coins",
    "Meme Coins",
  ];
  const resourcesArray = [
    "Resources",
    "Perpetuals",
    "Crypto News",
    "Bitcoin Treasury",
    "Donations",
    "Bitcoin",
    "Ethereum",
  ];

  const aboutCoinGeckoArray = [
    "About CoinGecko",
    "About Us",
    "Careers",
    "Company Blog",
    "Branding Guide",
    "Request Form",
    "Advertising",
    "FAQ",
  ];

  const communityArray = [
    "Community",
    "Twitter",
    "Telegram Chat",
    "Telegram News",
    "Instagram",
    "Reddi",
    "Discord",
    "Facebook",
    "Youtube",
    "TikTok",
  ];

  const helpCenterArray = [" Help Center |", "Bug Bounty |", "Disclaimer"];
  const termsOfServiceArray = ["Terms of Service |", "Policy |", "Ad Policy"];

  function footerLists(array) {
    return array.map((e) => {
      return <li key={e.id}>{e}</li>;
    });
  }

  return (
    <div className={style.footerComponents}>
      <div>
        <img alt="coin-icon" />
        <div className={style.footerTexts}>
          <p>
            CoinGecko provides a fundamental analysis of the crypto market. In
            addition to tracking price, volume and market capitalisation,
            CoinGecko tracks community growth, open-source code development,
            major events and on-chain metrics.
          </p>
          <div className={style.helpCenterAndTermsOfServiceItems}>
            <div className={style.helpCenterAndTermsOfServiceDivs}>
              {footerLists(helpCenterArray)}
            </div>
            <div className={style.helpCenterAndTermsOfServiceDivs}>
              {footerLists(termsOfServiceArray)}
            </div>
          </div>

          <p>© 2022 CoinGecko. All Rights Reserved.</p>
        </div>
      </div>

      <div className={style.footerLIsts}>
        <div>{footerLists(exploreArray)}</div>
        <div>{footerLists(resourcesArray)}</div>
        <div>{footerLists(aboutCoinGeckoArray)}</div>
        <div>{footerLists(communityArray)}</div>
      </div>
      <div>
        <p>Interested to stay up-to-date with cryptocurrencies?</p>
        <p>
          Get the latest crypto news, updates, and reports by subscribing to our
          free newsletter.
        </p>
        <input type="email" placeholder="Enter your Enter" />
      </div>
    </div>
  );
}

export default Footer;
