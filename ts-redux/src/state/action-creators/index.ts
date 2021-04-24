import axios from "axios";
import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";

export const searchRepositories = (term: string) => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.SEARCH_REPOSITORIES });
  try {
    const { data } = await axios.get("https://registry.npmjs.org/-/v1/search", { params: { text: term } });
    const names = data.objects.map((result: any) => result.package.name);
    dispatch({ type: ActionType.SEARCH_REPOSITORIES_SUCCESS, payload: names });
  } catch (error) {
    dispatch({ type: ActionType.SEARCH_REPOSITORIES_ERROR, payload: error.message });
  }
};
