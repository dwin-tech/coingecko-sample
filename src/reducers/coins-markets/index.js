export const initialCoinsMarketsState = {
  current_price: 0,
};

const coinsMarketsReducer = (state = initialCoinsMarketsState, action) => {
  if (action?.type === "COINS-MARKETS") {
    return {
      ...state,
      current_price: action.payload,
    };
  }
  return state;
};

export default coinsMarketsReducer;
