let h3 = document.querySelector(".currentTime");

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let now = new Date();
let day = days[now.getDay()];
let hours = now.getHours().toString().padStart(2, "0");
let minutes = now.getMinutes().toString().padStart(2, "0");

let time = `${hours}:${minutes}`;
h3.innerHTML = `${day},${time}`;

function search(event) {
  event.preventDefault();
  let searchInbox = document.querySelector("#search-inbox");
}

let temperatureElement = document.querySelector(".current-temperature");
temperatureElement.dataset.unit = "celsius";

function convertTemperature() {
  let currentTemperature = parseFloat(
    temperatureElement.querySelector(".temperature-value").innerText
  );
  let isCelsius = temperatureElement.dataset.unit === "celsius";

  if (isCelsius) {
    let convertedTemperature = Math.round((currentTemperature * 9) / 5 + 32);
    temperatureElement.querySelector(".temperature-value").innerText =
      convertedTemperature;
    temperatureElement.querySelector(".temperature-unit").innerText = "°F";
    temperatureElement.dataset.unit = "fahrenheit";
  } else {
    let convertedTemperature = Math.round(((currentTemperature - 32) * 5) / 9);
    temperatureElement.querySelector(".temperature-value").innerText =
      convertedTemperature;
    temperatureElement.querySelector(".temperature-unit").innerText = "°C";
    temperatureElement.dataset.unit = "celsius";
  }
}
