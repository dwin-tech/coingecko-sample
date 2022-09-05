const coinId = (coindata) => {
  return {
    type: "COIN-ID",
    payload: coindata,
  };
};

export default coinId;
