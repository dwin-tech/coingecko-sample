export const initialCoinId = {
  coindata: [],
  currentPrice: 0,
};

// eslint-disable-next-line default-param-last
const coinIdReducer = (state = initialCoinId, action) => {
  if (action.type === "COIN-ID") {
    return {
      ...state,
      coindata: action.payload,
    };
  }
  if (action.type === "COIN-CURRENT-PRICE") {
    return {
      ...state,
      currentPrice: action.payload,
    };
  }
  return state;
};

export default coinIdReducer;
