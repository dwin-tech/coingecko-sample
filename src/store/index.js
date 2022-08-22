import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import coinsReducer from "../reducers/coinsCount";
import coinsMarketsReducer from "../reducers/coins-markets"

const reducers = combineReducers({
  coins: coinsReducer,
  coins_markets: coinsMarketsReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
