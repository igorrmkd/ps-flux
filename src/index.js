import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import ReactDOM from "react-dom";
import { render } from "react-dom";
import App from './components/App';
import { BrowserRouter as Router } from "react-router-dom"; //renamed as "Router"(optionally)


// ReactDOM.render(<HomePage />, document.getElementById("root"));
render(<Router>
  <App />
</Router>, document.getElementById("root"));


