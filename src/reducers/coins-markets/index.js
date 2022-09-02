export const initialCoinsMarketsState = {
  currentPrice: [],
  currentPage: 1,
  sortString: "market_cap_desc",
};
// eslint-disable-next-line default-param-last
const coinsMarketsReducer = (state = initialCoinsMarketsState, action) => {
  if (action.type === "COINS-MARKETS") {
    return {
      ...state,
      currentPrice: action.payload,
    };
  }
  if (action.type === "CURRENT-PAGE") {
    return {
      ...state,
      currentPage: action.pageNumber,
    };
  }
  if (action.type === "SORT-STRING") {
    return {
      ...state,
      sortString: action.sortString,
    };
  }
  return state;
};

export default coinsMarketsReducer;
