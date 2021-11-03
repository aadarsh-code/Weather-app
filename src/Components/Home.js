import React, { useState, useEffect } from "react";
import { WiCelsius } from "react-icons/wi";

import "./Home.css";
const Home = () => {
  const [city, setcity] = useState([]);
  const [search, setsearch] = useState("Delhi");

  const handleChange = (e) => {
    setsearch(e.target.value);
  };
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f652213223112c126a3e7d0188347717`
      );
      const data = await res.json();
      setcity(data.main);
    }
    fetchData();
  }, [search]);
  //   console.log(city);
  return (
    <>
      <div className="container">
        <div className="box">
          <h1 className="title">Weather-App</h1>
          <div className="box-flex">
            <input
              type="text"
              value={search}
              onChange={handleChange}
              placeholder="search city"
            />
          </div>
          <h1 className="location">
            <i class="fa-solid fa-street-view"></i> {search}
          </h1>

          {!city ? (
            <p className="para">No data Found</p>
          ) : (
            <div className="search-box">
              <div className="data">
                <h1 className="temp">
                  <i className="fa-solid fa-temperature-quarter"></i>
                  {parseInt(city.temp - 273.15)}°C
                </h1>
                <h2 className="min">
                  min-temp: {parseInt(city.temp_min - 273.15)}°C
                </h2>
                <h2 className="max">
                  max-temp: {parseInt(city.temp_max - 273.15)}°C
                </h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
