import "./App.css";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/index";
import { User } from "./User";

function App() {
  return (
    <Provider store={store}>
      <header>header</header>
      <User></User>
    </Provider>
  );
}

export default App;
