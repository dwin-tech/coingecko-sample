import React from "react";
import CoinIdComponent from "./coinId";
import CalculatorComponent from "./calculator";

function SecondPage() {
  return (
    <div>
      <div>
        <CoinIdComponent />
      </div>
      <div>
        <CalculatorComponent />
      </div>
    </div>
  );
}

export default SecondPage;
