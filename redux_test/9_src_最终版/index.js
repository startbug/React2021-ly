import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  /* 此处需要用到Provider包裹App，且目的是让App所有后代组件都能接收到store */
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
