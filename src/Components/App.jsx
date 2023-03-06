import React from "react";
import "../Style/App.css";
//import { weatherContext } from "../Context/Context.js";
import Form from "./Form";
import Container from "./Container";

function App() {
 // const { data } = useContext(weatherContext);
  return <div className="app">
    <Form/>
    <Container/>
  </div>
}

export default App;
