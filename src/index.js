import React from "react";
import ReactDOM from "react-dom";
// import StateProps from './react-basic/StateProps';
// import App from './react-basic/App';
// import Variabel from './react-basic/Variabel';
// import Map from "./react-basic/Map";
// import ReactComponents from "./react-basic/ReactComponents";
import "bootstrap/dist/css/bootstrap.min.css";
import Crud from "./crud-basic";

ReactDOM.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>,
  document.getElementById("root")
);
