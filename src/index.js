import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import reducer from "store/reducers";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middleware));

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
