import React from "react";
import ReactDOM from "react-dom";

import "./styles/yyx.scss";

import { Provider } from "react-redux";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { YyxStore } from "./store";

const container = document.getElementById("root") as HTMLElement;

ReactDOM.render(
  <Provider store={YyxStore}>
    <App />
  </Provider>,
  container
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
