import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

const HooksCakeContainer = (props) => {
  const [numbers, setNumbers] = useState(0);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>number of cake: {numOfCakes}</h2>
      <input type="number" onChange={(e) => setNumbers(e.target.value)} />
      <button onClick={() => dispatch(buyCake(numbers))}>
        buy {numbers} cake
      </button>
    </div>
  );
};

export default HooksCakeContainer;
