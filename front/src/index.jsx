import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CalendarBoard from "./components/CalendarBoard/container";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import { createCalendar } from "./services/calendar";
import rootReducer from "./redux/rootReducer";

const store = createStore(rootReducer);
dayjs.locale("ja");


const App = () => (
  <Provider store={store}>
    <CalendarBoard />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
