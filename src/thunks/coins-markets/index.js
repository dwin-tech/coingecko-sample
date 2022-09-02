import axios from "axios";
import coinsMarketsAction from "../../actions/coins-markets";

const coinsMarketsThunk = (dispatch, currentPage, order) => {
  return axios
    .get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${order}&per_page=100&page=${currentPage}`
    )
    .then((response) => {
      const getCoinsMarketsData = response.data;
      dispatch(coinsMarketsAction(getCoinsMarketsData));
    });
};

export default coinsMarketsThunk;
