const coinsMarketsAction = (getCoinsMarketsData) => {
  return {
    type: "COINS-MARKETS",
    payload: getCoinsMarketsData,
  };
};

export default coinsMarketsAction;
