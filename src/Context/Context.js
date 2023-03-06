import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const weatherContext = createContext();

const WeatherProvider = (props) => {
  const [data, setData] = useState({});
   const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=919777219eec1ff8b9953ecf61212a36`;

  const fetchdate = async () => {
    const res = await axios.get(url);
    setData(res.data);
  };

  



  // const fetchdate = async () => {
  //   const res = await fetch(url);
  //   const fetcheddate = await res.json();
  //   console.log(fetcheddate);
  //   setData(fetcheddate);
  // };

  return (
    <weatherContext.Provider value={ {data,location,setData,setLocation,fetchdate} }>
      {props.children}
    </weatherContext.Provider>
  );
};

export default WeatherProvider;
