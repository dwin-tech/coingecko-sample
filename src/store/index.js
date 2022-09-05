import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import coinsReducer from "../reducers/coinsCount";
import coinsMarketsReducer from "../reducers/coins-markets/index";
import coinIdReducer from "../reducers/coinId";

const reducers = combineReducers({
  coins: coinsReducer,
  coinsMarkets: coinsMarketsReducer,
  coinId: coinIdReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
