import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./component/store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <App />
    </HashRouter>
    {/* <BrowserRouter basename={process.env.PUBLIC_URL}>
    </BrowserRouter> */}
  </Provider>
);
