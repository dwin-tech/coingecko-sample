import React, { useEffect, useState } from "react";
import coinsMarketsThunk from "../../thunks/coins-markets";
import { useSelector, useDispatch } from "react-redux";
import Pegination from "./pagination";
import style from "./style.module.scss";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function CoinsMarketsComponent(props) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const drawCoinsMarketsData = useSelector(
    ({ coins_markets }) => coins_markets.current_price
  );

  useEffect(() => {
    coinsMarketsThunk(dispatch);
  }, []);

  useEffect(() => {
    if (drawCoinsMarketsData) {
      const array = drawCoinsMarketsData.map((e) => {
        return (
          <div className={style.coinsMarketsData}>
            <div className={style.coinsMarketsNameAndSymbol}>
              <p>{e.market_cap_rank}</p>
              <StarBorderIcon />
              <img src={e.image}></img>
              <p>{e.name}</p>
              <p>{e.symbol}</p>
            </div>
            <p>${e.current_price}</p>
            <p>{e.price_change_percentage_24h}%</p>
            <p>${e.total_volume}</p>
            <p>${e.market_cap}</p>
            <p>
              {e.fully_diluted_valuation
                ? `$${e.fully_diluted_valuation}`
                : "?"}
            </p>
          </div>
        );
      });
      setData(array);
    }
  }, [drawCoinsMarketsData]);

  return (
    <div>
      {data}
      <Pegination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default CoinsMarketsComponent;
