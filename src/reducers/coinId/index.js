export const initialCoinId = {
  coindata: [],
};

// eslint-disable-next-line default-param-last
const coinIdReducer = (state = initialCoinId, action) => {
  if (action.type === "COIN-ID") {
    return {
      ...state,
      coindata: action.payload,
    };
  }
  return state;
};

export default coinIdReducer;
