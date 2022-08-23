import axios from "axios";

const coinsThunk = (dispatch) => {
  return axios
    .get("https://api.coingecko.com/api/v3/global")
    .then((response) => {
      const globalData = response.data;
      console.log(globalData, "globalData");
      dispatch({ type: "COINS-COUNT", globalData });
    });
};

export default coinsThunk;
