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
const tickerText = "Thx for watching WS4000 powered by ChatGPT and made by lunvyyrx. Current conditions at Robloxia: Temp: 84°F Heat Index: 88°F Humidity: 73% Dew Point: 68°F Pressure: 30.01" Wind: WNW 6 MPH Visb: 10 MI Ceiling: 9500 FT";
document.getElementById("ticker").textContent = tickerText;
