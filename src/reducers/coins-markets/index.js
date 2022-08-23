export const initialCoinsMarketsState = {
  currentPrice: 0,
  currentPage: 1,
};
// eslint-disable-next-line default-param-last
const coinsMarketsReducer = (state = initialCoinsMarketsState, action) => {
  if (action.type === "COINS-MARKETS") {
    return {
      ...state,
      currentPrice: action.payload,
    };
  }
  if (action.type === "SET-CURRENT-PAGE") {
    return {
      ...state,
      currentPage: action.currentPage,
    };
  }
  return state;
};

export default coinsMarketsReducer;
