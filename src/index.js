import React from "react";
import ReactDom from "react-dom";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers";

//App Component
import App from "./components/App";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Custom CSS
import "./resources/styles/index.css";

//Creating Store
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState(), "state");
});

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);
