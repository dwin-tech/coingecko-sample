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
  return state;
};

export default coinsMarketsReducer;
