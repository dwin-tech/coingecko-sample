import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import style from "./style.module.scss";
import coinsMarketsThunk from "../../thunks/coins-markets";
import coinsMarketsReducer from "../../reducers/coins-markets";

function SortedByComponenet() {
  const [sort, setSort] = useState(false);
  const getCurrentPage = useSelector((state) => state.coinsMarkets.currentPage);
  const getSortString = useSelector((state) => state.coinsMarkets.sortString);
  const dispatch = useDispatch();

  function sortByMarketCap(sortString) {
    coinsMarketsThunk(dispatch, getCurrentPage, sortString);
  }

  function sorting(sortAsc, sortDesc) {
    if (sort === false) {
      setSort(true);
      sortByMarketCap(sortAsc);
      coinsMarketsReducer(
        dispatch({ type: "SORT-STRING", payload: getSortString })
      );
    } else {
      setSort(false);
      sortByMarketCap(sortDesc);
      coinsMarketsReducer(
        dispatch({ type: "SORT-STRING", payload: getSortString })
      );
    }
  }

  return (
    <div className={style.allSortedButton}>
      <div className={style.coinButtons}>
        <div className={style.buttonsHover}>
          <button
            type="submit"
            onClick={() => {
              sorting("id_asc", "id_desc");
            }}
          >
            #
          </button>
          <div>
            {" "}
            {sort ? (
              <div className={style.downIcon}>
                <KeyboardControlKeyIcon />
              </div>
            ) : (
              <div className={style.downIcon}>
                <KeyboardArrowDownIcon />
              </div>
            )}
          </div>
        </div>
        <div className={style.buttonsHover}>
          <button
            type="submit"
            onClick={() => sorting("gecko_asc", "gecko_desc")}
          >
            {" "}
            Coin
          </button>
          <div>
            {" "}
            {sort ? (
              <div className={style.downIcon}>
                <KeyboardControlKeyIcon />
              </div>
            ) : (
              <div className={style.downIcon}>
                <KeyboardArrowDownIcon />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={style.coinsDataButtons}>
        <div className={style.priceButton}>
          <button type="submit">Price</button>
          <div>
            {" "}
            {sort ? (
              <div className={style.priceButton}>
                <KeyboardControlKeyIcon className={style.downIcon} />
              </div>
            ) : (
              <div className={style.priceButton}>
                <KeyboardArrowDownIcon className={style.downIcon} />
              </div>
            )}
          </div>
        </div>
        <div className={style.buttonsHover}>
          <button type="submit">24h</button>
        </div>{" "}
        <div className={style.buttonsHover}>
          <div>
            {" "}
            {sort ? (
              <div className={style.buttonsHover}>
                <KeyboardControlKeyIcon className={style.downIcon} />
              </div>
            ) : (
              <div className={style.buttonsHover}>
                <KeyboardArrowDownIcon className={style.downIcon} />
              </div>
            )}
          </div>
        </div>{" "}
        <div className={style.valueAndMrkCap}>
          <button
            type="submit"
            onClick={() => {
              sorting("volume_asc", "volume_desc");
            }}
          >
            24h Volume
          </button>
          <div>
            {" "}
            {sort ? (
              <div className={style.valueAndMrkCap}>
                <KeyboardControlKeyIcon className={style.downIcon} />
              </div>
            ) : (
              <div className={style.valueAndMrkCap}>
                <KeyboardArrowDownIcon className={style.downIcon} />
              </div>
            )}
          </div>
        </div>
        <div className={style.valueAndMrkCap}>
          {" "}
          <button
            type="submit"
            onClick={() => {
              sorting("market_cap_asc", "market_cap_desc");
            }}
          >
            Mkt Cap
          </button>
          <div>
            {" "}
            {sort ? (
              <div className={style.valueAndMrkCap}>
                <KeyboardControlKeyIcon className={style.downIcon} />
              </div>
            ) : (
              <div className={style.valueAndMrkCap}>
                <KeyboardArrowDownIcon className={style.downIcon} />
              </div>
            )}
          </div>
        </div>
        <button type="submit">FDV</button>
        <div className={style.buttonsHover}>
          <div>
            {" "}
            {sort ? (
              <div className={style.buttonsHover}>
                <KeyboardControlKeyIcon className={style.downIcon} />
              </div>
            ) : (
              <div className={style.buttonsHover}>
                <KeyboardArrowDownIcon className={style.downIcon} />
              </div>
            )}
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default SortedByComponenet;
