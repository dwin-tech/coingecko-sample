import axios from "axios";
import coinsMarketsAction from "../../actions/coins-markets";

const coinsMarketsThunk = (dispatch) => {
  return axios
    .get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false?page=${1}&count=${100}`
    )
    .then((response) => {
      const getCoinsMarketsData = response.data;
      dispatch(coinsMarketsAction(getCoinsMarketsData));
    });
};

export default coinsMarketsThunk;
