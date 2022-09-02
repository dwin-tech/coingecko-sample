import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { NavLink } from "react-router-dom";
import coinsMarketsThunk from "../../thunks/coins-markets";
import style from "./style.module.scss";
import PaginationRounded from "./pagination/index";

function CoinsMarketsComponent() {
  const dispatch = useDispatch();
  const drawCoinsMarketsData = useSelector(
    (state) => state.coinsMarkets.currentPrice
  );
  const currentPage = useSelector((state) => state.coinsMarkets.currentPage);
  const sortString = useSelector((state) => state.coinsMarkets.sortString);
  useEffect(() => {
    coinsMarketsThunk(dispatch, sortString, currentPage);
  }, []);

  const array = drawCoinsMarketsData.map((e) => {
    return (
      <div key={e.id} className={style.coinsMarketsData}>
        <div className={style.coinsMarketsNameAndSymbol}>
          <StarBorderIcon />
          <span className={style.marketCapRank}>{e.market_cap_rank}</span>
          <img src={e.image} alt="coinsImage" />
          <NavLink to={`/coins/${e.id}`} className={style.coinsName}>
            {e.name}
          </NavLink>
          <p>{e.symbol}</p>
        </div>
        <div className={style.coinData}>
          <p>${e.current_price}</p>
          {e.price_change_percentage_24h < 0 ? (
            <p className={style.red}>
              {Math.ceil(e.price_change_percentage_24h * 10) / 10}%
            </p>
          ) : (
            <p className={style.green}>
              {Math.ceil(e.price_change_percentage_24h * 10) / 10}%
            </p>
          )}
          <p>${e.total_volume}</p>
          <p>${e.market_cap}</p>
          <p>
            {e.fully_diluted_valuation ? `$${e.fully_diluted_valuation}` : "?"}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div>
      {array}
      <PaginationRounded />
    </div>
  );
}

export default CoinsMarketsComponent;
