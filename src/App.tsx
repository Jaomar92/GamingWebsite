//Global imports
import { Provider } from "react-redux";
// Local Imports
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import store from "./redux/store/store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </div>
  );
}

export default App;
