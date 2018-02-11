import { loop, Cmd } from "redux-loop";
// create top level utils for `rp`
import rp from "request-promise-native";

import {
  GITHUB_USER_FETCH,
  GITHUB_USER_SUCCESS,
  GITHUB_USER_FAILURE,
  // fetchGithubUser,
  fetchGithubUserSuccess,
  fetchGithubUserFailure,
} from "../actions/example-github.js";

const API_URL = `http://localhost:3001`;

const rpOptions = user => {
  return {
    method: "GET",
    uri: `${API_URL}/github/${user}`,
    // qs: {
    //   access_token: "xxxxx xxxxx", // -> uri + '?access_token=xxxxx%20xxxxx'
    // },
    headers: {
      "User-Agent": "Request-Promise",
    },
    json: true, // Automatically parses the JSON string in the response
  };
};

function _fetchGithubUser(username) {
  return rp(rpOptions(username));
}

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
        Cmd.run(_fetchGithubUser, {
          successActionCreator: fetchGithubUserSuccess,
          failActionCreator: fetchGithubUserFailure,
          args: [action.username],
        })
      );

    case GITHUB_USER_SUCCESS:
      return { ...state, response: action.userProfile, error: null };

    case GITHUB_USER_FAILURE:
      return { ...state, error: action.error, response: "User not found." };

    default:
      return state;
  }
};
