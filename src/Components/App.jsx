import React, { useContext } from "react";
import "../Style/App.css";
import { weatherContext } from "../Context/Context.js";
import Form from "./Form";
import Container from "./Container";

function App() {
  const { pending, error,data } = useContext(weatherContext);
  return (
    <div className="main-container">
      <div>
        <Form />
      </div>
      <div className="app">
        {error && <h1>city not found</h1> }
        {pending && <h1>Enter a city name</h1> }
        {data && !error && <Container />}
      </div>
    </div>
  );
}

export default App;
