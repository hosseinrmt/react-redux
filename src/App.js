import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import ChipsContainer from "./components/ChipsContainer";
import CakeWithPayload from "./components/CakeWithPayload";
import HooksCakeContainer from "./components/HooksCakeContainer";
import store from "./redux/store";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <CakeContainer />
        <HooksCakeContainer />
        <ChipsContainer />
        <CakeWithPayload /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
