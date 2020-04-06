import React from "react";
import ReactDom from "react-dom";
import App from "./src/App";
import "bulma";
import "./src/styles/site.scss";

const root = document.getElementById("root");


ReactDom.render(React.createElement(App), root);
