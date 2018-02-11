import { combineReducers } from "redux-loop";
import { reducer as exampleGithubReducer } from "./example-github";
import { routerReducer as router } from "react-router-redux";

const rootReducer = combineReducers({
  router,
  githubUser: exampleGithubReducer,
});

export default rootReducer;
