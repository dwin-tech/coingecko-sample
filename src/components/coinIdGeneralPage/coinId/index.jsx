import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import getCoinId from "../../../thunks/coin-id";
import style from "./style.module.scss";
import HighAndLowPrices from "../highAndLowPrices";

function CoinIdComponent() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const coinData = useSelector((state) => state.coinId.coindata);
  useEffect(() => {
    getCoinId(dispatch, id);
  }, []);

  const array = coinData.map((e) => {
    return (
      <div key={e.id}>
        <div>
          <span className={style.rank}>Rank #{e.market_cap_rank}</span>
        </div>
        <div className={style.imgNameAndSymbol}>
          <img src={e.image} alt="coinsImage" />
          <span className={style.coinName}>{e.name}</span>
          <span className={style.coinSymbol}>({e.symbol})</span>
        </div>
        <div>
          <div className={style.coinPrice}>
            <span className={style.currentPrice}>${e.current_price}</span>
            <span>
              {e.price_change_percentage_24h < 0 ? (
                <div className={style.red}>
                  <span>
                    {" "}
                    <KeyboardArrowDownIcon />
                  </span>
                  <span>{e.price_change_percentage_24h.toFixed(1)}</span>
                </div>
              ) : (
                <div className={style.green}>
                  <span>
                    <KeyboardArrowUpIcon />
                  </span>
                  <span>{e.price_change_percentage_24h.toFixed(1)}</span>
                </div>
              )}
            </span>
          </div>
        </div>
        <div>
          <div className={style.threeButtons}>
            <button type="submit">
              <ReplyRoundedIcon />
            </button>
            <button type="submit">
              <NotificationsNoneIcon />
            </button>
            <button type="submit">
              <StarOutlineIcon />
            </button>
          </div>
          <div />
        </div>
        <HighAndLowPrices />
        <div className={style.allTableData}>
          <div className={style.coinTableDatas}>
            {e.market_cap ? (
              <div>
                <span>Market Cap </span>
                <span>${e.market_cap}</span>
              </div>
            ) : (
              " "
            )}
            {e.total_volume ? (
              <div>
                <span>24 Hour Trading Vol </span>
                <span>${e.total_volume}</span>
              </div>
            ) : (
              " "
            )}
            {e.fully_diluted_valuation ? (
              <div>
                <span>Fully Diluted Valuation </span>
                <span>${e.fully_diluted_valuation}</span>
              </div>
            ) : (
              " "
            )}
          </div>
          <div className={style.coinTableDatas}>
            {e.circulating_supply ? (
              <div>
                <span>Circulating Supply</span>
                <span>{e.circulating_supply}</span>
              </div>
            ) : (
              " "
            )}
            {e.total_supply ? (
              <div>
                <span>Total Supply </span>
                <span>{e.total_supply}</span>
              </div>
            ) : (
              " "
            )}
            {e.max_supply ? (
              <div>
                <span>Max Supply</span>
                <span>{e.max_supply}</span>
              </div>
            ) : (
              " "
            )}
          </div>
        </div>
      </div>
    );
  });

  return <div>{array}</div>;
}

export default CoinIdComponent;
