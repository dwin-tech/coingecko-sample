import React, { useState } from "react";
import { useSelector } from "react-redux";
import NorthIcon from "@mui/icons-material/North";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import style from "./style.module.scss";

function HideOrReadMoreComponent() {
  const [showLess, setShowLess] = useState(true);
  const coin24h = useSelector((state) => state.coins);
  return (
    <div>
      {showLess ? (
        <span>
          The global cryptocurrency market cap today is $1.19 Trillion, a $
          {coin24h.marketCapChangePercentage24hUsd < 0 ? (
            <span className={style.red}>
              {coin24h.marketCapChangePercentage24hUsd}%<ArrowDownwardIcon />
            </span>
          ) : (
            <span className={style.green}>
              {coin24h.marketCapChangePercentage24hUsd}%<NorthIcon />
            </span>
          )}{" "}
          change in the last 24 hours.
        </span>
      ) : (
        <div>
          <p>
            {" "}
            The global cryptocurrency market cap today is $1.19 Trillion, a ${" "}
            {coin24h.marketCapChangePercentage24hUsd < 0 ? (
              <span className={style.red}>
                {coin24h.marketCapChangePercentage24hUsd}%<ArrowDownwardIcon />
              </span>
            ) : (
              <span className={style.green}>
                {coin24h.marketCapChangePercentage24hUsd}%<NorthIcon />
              </span>
            )}
            change in the last 24 hours.
          </p>
          <p className={style.textTotalCrypt}>
            Total cryptocurrency trading volume in the last day is at $84.4
            Billion. Bitcoin dominance is at 38.3% and Ethereum dominance is at
            19%. CoinGecko is now tracking 12,954 cryptocurrencies. Popular
            trends of the industry right now are <span>DeFi</span> and{" "}
            <span>Play to Earn</span>.
          </p>
        </div>
      )}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setShowLess(!showLess);
        }}
      >
        {showLess ? <span>Read More</span> : <span>Hide</span>}
      </a>
    </div>
  );
}

export default HideOrReadMoreComponent;
