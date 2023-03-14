import { createContext, useState } from "react";
import axios from "axios";

export const weatherContext = createContext();

const WeatherProvider = (props) => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(true);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=919777219eec1ff8b9953ecf61212a36`;

  // const fetchdate = async () => {
  //   try {
  //     const res = await axios.get(url);
  //     console.log(!res.data.ok);
  //     setData(res.data);
  //     setPending(false);
  //     setError(false);
  //   } catch (error) {
  //     setError(true);
  //   }
  // };

  const fetchdate = async () => {
    try {
      const res = await fetch(url);
      const fetcheddate = await res.json();
      if (fetcheddate.message === "city not found") {
        throw Error(fetcheddate.message);
      }
      setData(fetcheddate);
      setError(null)
      setPending(false);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };


  return (
    <weatherContext.Provider
      value={{
        data,
        location,
        setData,
        setLocation,
        fetchdate,
        pending,
        error,
        
      }}
    >
      {props.children}
    </weatherContext.Provider>
  );
};

export default WeatherProvider;
