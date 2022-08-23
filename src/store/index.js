import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import coinsReducer from "../reducers/coinsCount";
import coinsMarketsReducer from "../reducers/coins-markets/index";

const reducers = combineReducers({
  coins: coinsReducer,
  coinsMarkets: coinsMarketsReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
