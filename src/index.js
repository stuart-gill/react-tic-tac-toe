import React from "react";
import ReactDOM from "react-dom";

import Game from "./components/Game";
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./reducers/index";


const store = createStore(rootReducer);

// ========================================

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
   document.getElementById("root"));
