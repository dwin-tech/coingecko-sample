import React, { useState } from "react";
import { useSelector } from "react-redux";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import style from "./style.module.scss";

function CalculatorComponent() {
  const coinSymbol = useSelector((state) => state.coinId.coindata);
  const symbol = coinSymbol.map((e) => (
    <span className={style.coinSymbol}>{e.symbol}</span>
  ));
  const coinCurrentPrice = coinSymbol.map((e) => (
    <span>{e.current_price}</span>
  ));
  const [count, setCount] = useState(0);
  const [multiplyingOrDivideCount, setMultiplyingCount] = useState(0);
  function sumAndMultiplyCount(type) {
    setCount(type ? count + 1 : count - 1);
    setMultiplyingCount(
      coinSymbol[0].current_price * (type ? count + 1 : count - 1)
    );
  }

  function sumAndDivide(type) {
    setMultiplyingCount(
      type ? multiplyingOrDivideCount + 1 : multiplyingOrDivideCount - 1
    );
    setCount(
      type
        ? (multiplyingOrDivideCount + 1) / coinSymbol[0].current_price
        : (multiplyingOrDivideCount - 1) / coinSymbol[0].current_price
    );
  }

  return (
    <div className={style.calculatorContainer}>
      <div>
        <p>Convert {symbol} to BCH</p>
        <div className={style.symbolAndCount}>
          <div className={style.symbolContainer}>{symbol}</div>
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
          <div className={style.symbolContainer}>USD</div>
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
          1 {symbol} = {coinCurrentPrice}USD
        </p>
      </div>
    </div>
  );
}

export default CalculatorComponent;
