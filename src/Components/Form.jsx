import React, { useContext } from "react";
import { weatherContext } from "../Context/Context.js";

const Form = () => {
  const { location, setLocation, fetchdate } = useContext(weatherContext);

  return (
   <div className="input-container">
     <div className="search">
      <input
        className="input"
        type="text"
        placeholder="Enter Location"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      />
      <button onClick={fetchdate} className="search-button">Search</button>
    </div>
   </div>
  );
};

export default Form;
