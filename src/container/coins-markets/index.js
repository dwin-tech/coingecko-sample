import { connect } from "react-redux";
import coinsMarketsAction from "../../actions/coins-markets";
import CoinsMarketsComponent from "../../components/coinsMarketsComponents";
const mapStateToProps = (state) => {
  return {
  coins_markets: state.coins_markets,
}
};

const mapDispatchToProps = (dispatch) => ({
  fetchCoinsMarkets: () => dispatch(coinsMarketsAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinsMarketsComponent);
