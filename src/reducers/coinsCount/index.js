/* eslint-disable no-unused-vars */

export const initalCoinsCountState = {
  active_cryptocurrencies: 0,
  markets: 0,
  total_market_cap: 0,
  market_cap_change_percentage_24h_usd: 0,
  market_cap_percentage: 0,
  market_cap_percentage_eth: 0,
  total_volume: 0,
  gas: "7 GWEI",
};

// eslint-disable-next-line default-param-last
const coinsReducer = (state = initalCoinsCountState, action) => {
  if (action?.type === "COINS-COUNT") {
    return {
      ...state,
      active_cryptocurrencies: action.globalData.data.active_cryptocurrencies,
      markets: action.globalData.data.markets,
      total_market_cap: action.globalData.data.total_market_cap.usd,
      market_cap_change_percentage_24h_usd:
        Math.ceil(
          action.globalData.data.market_cap_change_percentage_24h_usd * 10
        ) / 10,
      market_cap_percentage:
        Math.ceil(action.globalData.data.market_cap_percentage.btc * 10) / 10,
      total_volume: action.globalData.data.total_volume.usd,
      market_cap_percentage_eth:
        action.globalData.data.market_cap_percentage.eth.toFixed(1),
    };
  }
  return state;
};
// eslint-disable-next-line no-unused-vars

export default coinsReducer;
