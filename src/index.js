import React from "react";
import ReactDOM from "react-dom/client";
import "../src/Style/index.css";
import App from "../src/Components/App";
import WeatherProvider from "./Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WeatherProvider>
    <App />
  </WeatherProvider>
);
