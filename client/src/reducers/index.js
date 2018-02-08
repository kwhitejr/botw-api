import { combineReducers } from "redux-loop";
import { reducer as exampleGithubReducer } from "./example-github";

const rootReducer = combineReducers({
  githubUser: exampleGithubReducer,
});

export default rootReducer;
