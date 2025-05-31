const canvas = document.getElementById('overlay');
const ctx = canvas.getContext('2d');

canvas.width = 640;
canvas.height = 480;

// Example city data
const cities = [
  { name: "Robloxia", x: 300, y: 240 }
];

// Draw city names and placeholder data
ctx.font = "12px monospace";
ctx.fillStyle = "white";

cities.forEach(city => {
  ctx.fillText(city.name, city.x, city.y);
  ctx.fillStyle = "yellow";
  ctx.fillText("84°F", city.x, city.y + 12);
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(city.x, city.y - 10, 5, 0, 2 * Math.PI);
  ctx.fill();
});

// Ticker
const tickerText = "Current conditions at Robloxia: Temp: 84°F Heat Index: 88°F Humidity: 73% Dew Point: 68°F Pressure: 30.01" Wind: WNW 6 MPH Visb: 10 MI Ceiling: 9500 FT";
document.getElementById("ticker").textContent = tickerText;
// Setup canvas
const canvas = document.getElementById("overlay");
const ctx = canvas.getContext("2d");
canvas.width = 640;
canvas.height = 480;

// Fonts and drawing setup
ctx.font = "12px WS4000";
ctx.fillStyle = "white";

// Ask for location (this goes at the bottom)
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  console.log("Geolocation not supported.");
}

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  fetch(`https://api.weather.gov/points/${lat},${lon}`)
    .then(res => res.json())
    .then(data => {
      const city = data.properties.relativeLocation.properties.city;
      const state = data.properties.relativeLocation.properties.state;
      const forecastURL = data.properties.forecast;

      // Show city name on canvas
      ctx.fillText(`${city}, ${state}`, 100, 100);
      document.getElementById("ticker").textContent =
        `Conditions for ${city}, ${state}`;
    });
}

function error(err) {
  console.warn("Location access denied or failed.", err);
  document.getElementById("ticker").textContent =
    "⚠️ Location access denied. Weather info unavailable.";
}
