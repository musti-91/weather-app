import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { f2c } from "./components/helper";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
