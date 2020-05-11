import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./scss/app";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import * as serviceWorker from '../serviceWorker';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
