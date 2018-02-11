import { createStore, compose, applyMiddleware } from "redux";
import { install as installReduxLoop } from "redux-loop";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

import reducers from "../reducers/index";

export const history = createHistory();
const router = routerMiddleware(history);
const middleware = [router];

const enhancers = compose(
  // Apply middleware
  // applyMiddleware(...middleware),
  // Install redux-loop
  installReduxLoop(),

  // Apply devtools
  window.devToolsExtension && process.env.NODE_ENV !== "production"
    ? window.devToolsExtension()
    : f => f
);

export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, enhancers);

  if (module.hot) {
    module.hot.accept("../reducers/index", () =>
      store.replaceReducer(require("../reducers/index"))
    );
  }

  return store;
}
