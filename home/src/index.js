import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "alertifyjs/build/css/alertify.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
