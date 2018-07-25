import React from "react";
import ReactDOM from "react-dom";
import "tachyons";
import { Provider } from "react-redux";
import store from "./store";

import { setColors } from "./action-creators/colors";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

store.dispatch(setColors);
