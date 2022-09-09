import axios from "axios";
import coinId, { coinCurrentPriceAction } from "../../actions/coin-id";

const getCoinId = (dispatch, id) => {
  return axios
    .get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    )
    .then((response) => {
      const coinIdData = response.data;
      dispatch(coinId(coinIdData));
    });
};

export const coinCurrentPriceThunk = (dispatch, id) => {
  return axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
      const currentPrice = response.data;
      dispatch(coinCurrentPriceAction(currentPrice));
    });
};
export default getCoinId;
