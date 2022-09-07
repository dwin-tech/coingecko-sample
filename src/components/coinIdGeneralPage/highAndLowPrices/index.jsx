import React from "react";
import { useSelector } from "react-redux";
import style from "./style.module.scss";

function HighAndLowPrices() {
  const highAndLowPrices = useSelector((state) => state.coinId.coindata);
  const array = highAndLowPrices.map((e) => {
    return (
      <div key={e.id} className={style.contOfHighAndLowPrices}>
        <p>${e.low_24h}</p>
        <p>24H Range</p>
        <p>${e.high_24h}</p>
      </div>
    );
  });
  const percent =
    (highAndLowPrices[0].low_24h * 100) / highAndLowPrices[0].high_24h;
  return (
    <div>
      <div className={style.highAndLowPrices}>
        {" "}
        <div
          style={{
            width: `${percent}%`,
          }}
        />
      </div>
      <div>{array}</div>
    </div>
  );
}

export default HighAndLowPrices;
