import React from "react";
import ReactDOM from "react-dom";
// Main css for everything
import "./index.css";
// For carousel
import "./lib/owlcarousel/assets/owl.carousel.min.css";
import App from "./App";
// TODO: Fix jQuery error
// import "./lib/easing/easing.min.js";
// import "./lib/owlcarousel/owl.carousel.min.js";
// import "./mail/jqBootstrapValidation.min.js";
// import "./mail/contact.js";
// import "./js/main";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
