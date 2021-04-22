import ReactDom from "react-dom";
import EventComponent from "./Events/EventComponent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

const App = () => {
  return (
    <div>
      <EventComponent />
      <UserSearch />
      <GuestList />
    </div>
  );
};

export default App;
ReactDom.render(<App />, document.querySelector("#root"));
