import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import GlobalCSS from './global.css'
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import App from "./App";

library.add(faMagnifyingGlass, faChevronRight);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalCSS />
      <App />
    </Provider>
  </React.StrictMode>
);
