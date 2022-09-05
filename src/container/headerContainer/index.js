import { connect } from "react-redux";
import coinsAction from "../../actions/coins-action";
import Header from "../../components/header";

const mapStateToProps = (state) => ({
  coins: state.coins,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoins: () => dispatch(coinsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
