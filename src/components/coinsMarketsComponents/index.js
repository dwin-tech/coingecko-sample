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
              <div>{e.market_cap_rank}</div>
              <img src={e.image} alt="coinsImage" />
              <div>{e.name}</div>
              <div>{e.symbol}</div>
            </div>
            <div>${e.current_price}</div>
            <div>{e.price_change_percentage_24h}%</div>
            <div>${e.total_volume}</div>
            <div>${e.market_cap}</div>
            <div>
              {e.fully_diluted_valuation
                ? `$${e.fully_diluted_valuation}`
                : "?"}
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
