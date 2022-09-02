const coinsMarketsAction = (getCoinsMarketsData) => {
  return {
    type: "COINS-MARKETS",
    payload: getCoinsMarketsData,
  };
};

export const coinsCurrentPage = (currentPage) => {
  return {
    type: "CURRENT-PAGE",
    payload: currentPage,
  };
};

export const coinsSortString = (sortString) => {
  return {
    type: "SORT-STRING",
    payload: sortString,
  };
};
export default coinsMarketsAction;
