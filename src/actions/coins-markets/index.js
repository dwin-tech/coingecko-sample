const coinsMarketsAction = (getCoinsMarketsData) => {
  return {
    type: "COINS-MARKETS",
    payload: getCoinsMarketsData,
  };
};
export const currnetPageAction = () => {
  return {
    type: "SET-CURRENT-PAGE",
  };
};

export default coinsMarketsAction;
