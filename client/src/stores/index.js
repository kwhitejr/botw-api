import { createStore, compose } from "redux";
import { install as installReduxLoop } from "redux-loop";

import reducers from "../reducers/index";

const enhancers = compose(
  // Install redux-loop
  installReduxLoop(),
  // Apply devtools
  window.devToolsExtension && process.env.NODE_ENV !== "production"
    ? window.devToolsExtension()
    : f => f
);

const configureStore = (initialState = {}) => {
  const store = createStore(reducers, initialState, enhancers);

  // if (module.hot) {
  //   module.hot.accept("../reducers/index", () =>
  //     store.replaceReducer(require("../reducers/index"))
  //   );
  // }

  return store;
};

export default configureStore;
