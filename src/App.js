import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import RoutesSistem from "./Routes/Routes";
import store from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RoutesSistem />
      </Provider>
    </div>
  );
}

export default App;
