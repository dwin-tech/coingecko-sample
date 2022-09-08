import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useParams } from "react-router-dom";
import style from "./style.module.scss";
import { coinCurrentPriceThunk } from "../../../thunks/coin-id";
import SelectAutoWidth from "./selectExchanges";

function CalculatorComponent() {
  const [cours, setCours] = useState("usd");
  const [coursObject, setCoursObject] = useState({});

  const [count, setCount] = useState(0);

  const [multiplyingOrDivideCount, setMultiplyingCount] = useState(0);
  const currentPrice = useSelector((state) => state.coinId.currentPrice);

  useEffect(() => {
    setCoursObject({ usd: 0.1145452 });
  }, []);

  useEffect(() => {
    setCoursObject(currentPrice?.market_data?.current_price);
  }, [currentPrice]);

  // eslint-disable-next-line no-unused-vars

  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    coinCurrentPriceThunk(dispatch, id);
  }, []);

  function sumAndMultiplyCount(type) {
    setCount(type ? count + 1 : count - 1);
    setMultiplyingCount(coursObject[cours] * (type ? count + 1 : count - 1));
  }

  function sumAndDivide(type) {
    const sumAndDivideCount = type
      ? multiplyingOrDivideCount + 1
      : multiplyingOrDivideCount - 1;
    setMultiplyingCount(sumAndDivideCount);
    setCount(sumAndDivideCount / coursObject[cours]);
  }

  // eslint-disable-next-line no-unused-vars

  return (
    <div className={style.calculatorContainer}>
      <div>
        <p className={style.coinSymbol}>Convert {currentPrice.symbol} to BCH</p>
        <div className={style.symbolAndCount}>
          <div className={style.symbolContainer}>{currentPrice.symbol}</div>
          <div className={style.inputAndIcons}>
            <input type="text" value={count} />
            <div className={style.icons}>
              <button
                type="submit"
                onClick={() => sumAndMultiplyCount("increase")}
              >
                <ArrowDropUpIcon className={style.arrowDropUpIcon} />
              </button>
              <button type="submit" onClick={() => sumAndMultiplyCount()}>
                <ArrowDropDownIcon className={style.arrowDropDownIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={style.symbolAndCount}>
          <SelectAutoWidth
            className={style.selectCours}
            cours={cours}
            setCours={setCours}
            obj={coursObject}
          />
          <div className={style.inputAndIcons}>
            <input type="text" value={multiplyingOrDivideCount} />
            <div className={style.icons}>
              <button type="submit">
                <ArrowDropUpIcon
                  className={style.arrowDropUpIcon}
                  onClick={() => sumAndDivide("divide")}
                />
              </button>
              <button type="submit">
                <ArrowDropDownIcon
                  className={style.arrowDropDownIcon}
                  onClick={() => sumAndDivide()}
                />
              </button>
            </div>
          </div>
        </div>
        <p className={style.priceAndSymbol}>
          1 <span className={style.coinSymbol}>{currentPrice.symbol}</span> =
          {!!coursObject && coursObject[cours]}{" "}
          <span className={style.coinSymbol}>{cours}</span>
        </p>
      </div>
    </div>
  );
}

export default CalculatorComponent;
