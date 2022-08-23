import axios from "axios";
import coinsMarketsAction from "../../actions/coins-markets";

const coinsMarketsThunk = (dispatch, data) => {
  console.log(data, "data");
  return axios
    .get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${data}&sparkline=false?`
    )
    .then((response) => {
      const getCoinsMarketsData = response.data;
      console.log(getCoinsMarketsData, "getCoinsMarketsData");
      dispatch(coinsMarketsAction(getCoinsMarketsData));
    });
};

export default coinsMarketsThunk;
