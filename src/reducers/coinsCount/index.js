/* eslint-disable no-unused-vars */

export const initalCoinsCountState = {
  activeCryptocurrencies: 0,
  markets: 0,
  totalMarketCap: 0,
  marketCapChangePercentage24hUsd: 0,
  marketCapPercentage: 0,
  marketCapPercentageEth: 0,
  totalVolume: 0,
  gas: "7 GWEI",
};

// eslint-disable-next-line default-param-last
const coinsReducer = (state = initalCoinsCountState, action) => {
  if (action.type === "COINS-COUNT") {
    return {
      ...state,
      activeCryptocurrencies: action.globalData.data.active_cryptocurrencies,
      markets: action.globalData.data.markets,
      totalMarketCap: action.globalData.data.total_market_cap.usd,
      marketCapChangePercentage24hUsd:
        Math.ceil(
          action.globalData.data.market_cap_change_percentage_24h_usd * 10
        ) / 10,
      marketCapPercentage:
        action.globalData.data.market_cap_percentage.btc.toFixed(1),
      totalVolume: action.globalData.data.total_volume.usd,
      marketCapPercentageEth:
        action.globalData.data.market_cap_percentage.eth.toFixed(1),
    };
  }
  return state;
};
// eslint-disable-next-line no-unused-vars

export default coinsReducer;
