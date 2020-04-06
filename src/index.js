import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import ReactDOM from "react-dom";
import { render } from "react-dom";
import App from './components/App';


// ReactDOM.render(<HomePage />, document.getElementById("root"));
render(<div>
  <App />
</div>, document.getElementById("root"));
// render(<HomePage />)

