let inp = document.getElementById("inp");
let btn = document.getElementById("search-btn");
let img = document.getElementById("weather-img");
let temp = document.querySelector(".temprature");
let description = document.querySelector(".description");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind-speed");
let notFound = document.querySelector(".not-found");
let weatherBody = document.querySelector(".weather-body");

async function checkWeather(narendraModi) {
  let apikey = `67b3f68faee943c8aea615de7fabea1d`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${narendraModi}&appid=${apikey}`;

  let data = await fetch(`${url}`).then((res) => res.json());
  console.log(data);

  if (data.cod == "404") {
    notFound.style.display = "flex";
    weatherBody.style.display = "none";
  } else {
    weatherBody.style.display = "flex";
    temp.innerHTML = `${Math.round(data.main.temp - 273.15)} °C`;
    description.innerHTML = `${data.weather[0].description} `;
    humidity.innerHTML = `${data.main.humidity} %`;
    wind.innerHTML = `${data.wind.speed} KM/H`;
    switch (data.weather[0].main) {
      case "Clear":
        img.src = "./assets/clear.png";
        break;
      case "Clouds":
        img.src = "./assets/cloud.png";
        break;
      case "Rain":
        img.src = "./assets/rain.png";
        break;
      case "Snow":
        img.src = "./assets/snow.png";
        break;
      case "Mist":
        img.src = "./assets/mist.png";
        break;
    }
  }
}

btn.addEventListener("click", () => {
  checkWeather(inp.value);
});
