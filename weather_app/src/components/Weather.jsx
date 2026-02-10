import React, { useEffect, useRef, useState } from "react";
import { Search, Droplets, Wind, AlertCircle, Loader } from "lucide-react";
import "./Weather.css";

function Weather() {
  const [weatherData, setWeatherData] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const getWeatherData = async (city) => {
    if (city === "") {
      setWeatherData(false);
      alert("Please enter a city name");
      return;
    }

    setLoading(true);
    try {
      const url = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_APP_ID}&q=${city}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeatherData({
        humidity: data.current.humidity,
        windSpeed: data.current.wind_kph,
        temperature: data.current.temp_c,
        location: data.location.name,
        country: data.location.country,
        condition: data.current.condition.text,
        icon: data.current.condition.icon,
        feelsLike: data.current.feelslike_c,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Failed to fetch weather data. Please try again.");
      setWeatherData(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeatherData("Dhaka");
  }, []);

  return (
    <div className="w-full">
      {/* Search Bar */}
      <div className="flex gap-3 mb-6">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search city..."
          onKeyPress={(e) =>
            e.key === "Enter" && getWeatherData(inputRef.current.value)
          }
          className="flex-1 px-5 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all shadow-lg text-base font-medium"
        />
        <button
          onClick={() => getWeatherData(inputRef.current.value)}
          className="bg-white hover:bg-blue-50 text-blue-600 rounded-xl p-3 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
        >
          <Search size={24} className="text-blue-600" />
        </button>
      </div>

      {/* Weather Card */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-12 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
          <Loader size={48} className="text-white animate-spin mb-4" />
          <p className="text-white text-lg font-semibold">Loading weather...</p>
        </div>
      ) : weatherData ? (
        <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 shadow-2xl">
          {/* Current Weather Section */}
          <div className="text-center mb-8">
            {/* Weather Icon */}
            <div className="flex justify-center mb-5">
              <img
                src={`https:${weatherData?.icon}`}
                alt={weatherData?.condition}
                className="w-24 h-24 drop-shadow-lg"
              />
            </div>

            {/* Temperature */}
            <p className="text-7xl font-bold text-white mb-2">
              {weatherData?.temperature}°
            </p>

            {/* Location */}
            <p className="text-2xl font-semibold text-blue-100 mb-1">
              {weatherData?.location}, {weatherData?.country}
            </p>

            {/* Condition */}
            <p className="text-lg text-blue-200 mb-4 capitalize">
              {weatherData?.condition}
            </p>

            {/* Feels Like */}
            <p className="text-base text-blue-100 font-medium">
              Feels like{" "}
              <span className="font-bold text-lg">
                {weatherData?.feelsLike}°C
              </span>
            </p>
          </div>

          {/* Weather Details Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Humidity Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/20 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Droplets size={28} className="text-blue-300" />
                <span className="text-blue-100 text-sm font-medium">
                  Humidity
                </span>
              </div>
              <p className="text-4xl font-bold text-white">
                {weatherData?.humidity}%
              </p>
            </div>

            {/* Wind Speed Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/20 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Wind size={28} className="text-blue-300" />
                <span className="text-blue-100 text-sm font-medium">
                  Wind Speed
                </span>
              </div>
              <p className="text-4xl font-bold text-white">
                {weatherData?.windSpeed}
              </p>
              <p className="text-sm text-blue-200">km/h</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
          <AlertCircle size={48} className="text-blue-200 mb-4" />
          <p className="text-white text-lg font-semibold">
            Enter a city name to get started
          </p>
        </div>
      )}
    </div>
  );
}

export default Weather;
