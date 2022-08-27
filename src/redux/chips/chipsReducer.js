import { BUY_CHIPS } from "./chipsTypes";

const initialState = {
  numOfChips: 10,
};

const chipsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CHIPS:
      return { ...state, numOfChips: state.numOfChips - 1 };

    default:
      return state;
  }
};

export default chipsReducer;
