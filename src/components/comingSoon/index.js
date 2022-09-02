import React from "react";
import image from "../../images/coingeckoIcon.png";
import style from "./style.module.scss";

function ComingSoon() {
  return (
    <div className={style.comingSoon}>
      <img src={image} alt="coinIcon" />
      <p>Coming soon....</p>
    </div>
  );
}
export default ComingSoon;
