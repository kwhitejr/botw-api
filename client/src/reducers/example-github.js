import { loop, Cmd } from "redux-loop";

import {
  GITHUB_USER_FETCH,
  GITHUB_USER_SUCCESS,
  GITHUB_USER_FAILURE,
  // fetchGithubUser,
  fetchGithubUserSuccess,
  fetchGithubUserFailure,
} from "../actions/example-github.js";

const API_URL = `http://localhost:3001`;

const fetchGithubUser = username => {
  fetch(`${API_URL}/github/${username}`);
};

export const INITIAL_STATE = {
  error: null,
  response: "Submit a query above! End default message.",
  isFetchingGithubUser: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GITHUB_USER_FETCH:
      return loop(
        { ...state, isFetchingGithubUser: true },
        Cmd.run(fetchGithubUser, {
          successActionCreator: fetchGithubUserSuccess,
          failActionCreator: fetchGithubUserFailure,
          args: [action.username],
        })
      );

    case GITHUB_USER_SUCCESS:
      return { ...state, response: action.userProfile };

    case GITHUB_USER_FAILURE:
      return { ...state, error: action.error };

    default:
      return state;
  }
};
