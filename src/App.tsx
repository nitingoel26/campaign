import { Provider } from "react-redux";
import store from "./store/store.ts";
import RouterContainer from "./containers/router/router.container.tsx";
function App() {
  return (
    <Provider store={store}>
      <RouterContainer />
    </Provider>
  );
}

export default App;
