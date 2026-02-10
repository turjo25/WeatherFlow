# WeatherFlow

A modern, responsive weather application built with React and Tailwind CSS.

## Features

- 🌍 Real-time weather data using WeatherAPI
- 🎨 Modern glassmorphism UI design
- 📱 Fully responsive and mobile-friendly
- 🔍 Search weather by city name
- 📊 Display temperature, humidity, wind speed, and "feels like" temperature
- ⚡ Fast performance with Vite bundler
- 🎯 Lucide React icons for professional appearance

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **API**: WeatherAPI.com
- **Build Tool**: Vite

## Setup

1. **Clone the repository**

   ```bash
   cd weather_app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create `.env` file** in the root directory

   ```
   VITE_APP_ID=your_weatherapi_key
   ```

   Get your free API key from [WeatherAPI.com](https://www.weatherapi.com/)

4. **Start development server**
   ```bash
   npm run dev
   ```
   Open http://localhost:5173 in your browser

## Usage

- Enter a city name in the search bar and press Enter or click the search button
- View current weather conditions including temperature, humidity, and wind speed
- Default city is Dhaka (loads on startup)

## Build

```bash
npm run build
```

## License

MIT
