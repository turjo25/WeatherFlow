import React from "react";
import Weather from "./components/Weather";
import "./index.css";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">WeatherFlow</h1>
          <p className="text-blue-100 text-lg">Get real-time weather updates</p>
        </div>
        <Weather />
      </div>
    </div>
  );
};

export default App;
