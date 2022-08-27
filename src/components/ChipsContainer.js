import { useSelector, useDispatch } from "react-redux";
import { buyChips } from "../redux/chips/chipsActions";

const ChipsContainer = (props) => {
  const numOfChips = useSelector((state) => state.chips.numOfChips);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>number of chips: {numOfChips}</h2>
      <button onClick={() => dispatch(buyChips())}>buy chips</button>
    </div>
  );
};

export default ChipsContainer;
