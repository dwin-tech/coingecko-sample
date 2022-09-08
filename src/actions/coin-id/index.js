const coinId = (coindata) => {
  return {
    type: "COIN-ID",
    payload: coindata,
  };
};

export const coinCurrentPriceAction = (currentPrice) => {
  return {
    type: "COIN-CURRENT-PRICE",
    payload: currentPrice,
  };
};

export default coinId;
