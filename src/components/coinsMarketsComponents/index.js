import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import coinsMarketsThunk from "../../thunks/coins-markets";
import style from "./style.module.scss";
import PaginationRounded from "./pagination/index";

function CoinsMarketsComponent() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const drawCoinsMarketsData = useSelector(
    (state) => state.coinsMarkets.currentPrice
  );
  const currentPage = useSelector((state) => state.coinsMarkets.currentPage);
  useEffect(() => {
    coinsMarketsThunk(dispatch, currentPage);
  }, []);

  useEffect(() => {
    if (drawCoinsMarketsData) {
      const array = drawCoinsMarketsData.map((e) => {
        return (
          <div className={style.coinsMarketsData}>
            <div className={style.coinsMarketsNameAndSymbol}>
              <StarBorderIcon />
              <span>{e.market_cap_rank}</span>
              <img src={e.image} alt="coinsImage" />
              <h1>{e.name}</h1>
              <p>{e.symbol}</p>
            </div>
            <div className={style.coinData}>
              <p>${e.current_price}</p>
              {e.price_change_percentage_24h < 0 ? (
                <p className={style.red}>{e.price_change_percentage_24h}%</p>
              ) : (
                <p className={style.green}>{e.price_change_percentage_24h}%</p>
              )}
              <p>${e.total_volume}</p>
              <p>${e.market_cap}</p>
              <p>
                {e.fully_diluted_valuation
                  ? `$${e.fully_diluted_valuation}`
                  : "?"}
              </p>
            </div>
          </div>
        );
      });
      setData(array);
    }
  }, [drawCoinsMarketsData]);

  return (
    <div>
      {data}
      <PaginationRounded />
    </div>
  );
}

export default CoinsMarketsComponent;
