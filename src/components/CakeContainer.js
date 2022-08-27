import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

const CakeContainer = (props) => {
  return (
    <div>
      <h2>number of cake: {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>buy cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
