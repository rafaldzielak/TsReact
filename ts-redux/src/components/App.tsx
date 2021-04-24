import { Provider } from "react-redux";
import { store } from "../state";
import "../App.css";
import RepositoriesList from "./RepositoriesList";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
