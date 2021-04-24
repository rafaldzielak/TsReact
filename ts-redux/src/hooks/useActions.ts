import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useActions = () => {
  const dispatch = useDispatch();
  //gives back an object will all the different actions creators provided in 1st argument
  return bindActionCreators(actionCreators, dispatch);
  // { searchRepositories: dispatch( searchRepositories() ) }
};
