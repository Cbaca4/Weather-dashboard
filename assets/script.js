function initPage() {
const cityEl = document.getElementById("enter-city");
const searchEl = document.getElementById("search-button");
const clearEl = document.getElementById("clear-history");
const nameEl = document.getElementById("city-name");
const currentPicEl = document.getElementById("current-pic");
const currentTempEl = document.getElementById("temprature");
const currentHumidityEl = document.getElementById("humidity");
const currentWindEl = document.getElementById("wind-speed");
const currentUVEl = document.getElementById("UV-index");
const historyEl = document.getElementById("history");
var fivedayEl = document.getElementById("fiveday-header");
var searchHistory = JSON.parse(localStorage.getItem("search")) || [];

const APIkey = "bd4c39d9391cfb9dcf2a0b4f1bdac031";

function getWeather(cityName) {
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid" + APIkey;
  fetch(requestUrl)
    .then(function (response) {
        console.log(response);
        if (response.status === 200){
todayweather.El.classList.remove("d-none");
 }
return response.json();
})

const currentDate = new Date(response.data.dt * 1000);
const day = currentDate.getDate();
const month = currentDate.getMonth(); 
const year = currentDate.getFullYear();
nameEl.innerHTML = response.data.name + "(" + month + day + "/" + year + ")";
let weatherPic = response.data.weather[0].icon;
currentPicEl.setAttribute("src", "https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
currentPicEl.setAttribute("alt", response.data.weather[0].description);
currentTempEl.innerHTML = "temperature: " + k2f(response.data.main.temp) + "&176F";
currentHumidityEl.innerHTML = "humidity: " + response.data.main.humidity + "%";
currentWindEl.innerHTML = "Wind Speed: " + response.wind.speed + "MPH";

var lat = response.data.coord.lat;
var lon = response.data.coord.lon;
var UVQueryURL =  "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon" + lon + "&appid" + APIkey + "&cnt=1";
fetch(UVQueryURL)
.then(function (response) {
    let UVIndex = document.createElement("span");
    if (response.data[0].value < 4) {
        UVIndex.setAttribute("class", "badge Badge-success");
    }
    else if (response.data[0].value < 8) {
        UVIndex.setAttribute("class", "Badge Badge-warning");
    }
    else {UVIndex.setAttribute("class", "badbge badge-danger");
}
console.log(response.data[0].value)
UVIndex.innerHTML + response.data[0].value;
currentUVEl.innerText = "UV Index: ";
currentUVEl.append(UVIndex);
});

let cityID = response.data.id;
let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&appid" + APIkey;
fetch(forecastURL)
.then(function (response) {
    fivedayEl.classList.remove("d-none");
    const forecastEl = document.querySelectorAll(".forecast");
    for (i = 0; i < forecastEl.length, i++) {
        forecastEl[i].innerHTML ="";
        const forecastIndex = i * 8 + 4;
        const forecastDate = new Date(response.data.list[forecastIndex].dt *1000);
        const forecastDay = forecastDate.getDate();
        const forecastMonth = forecastDate.getMonth() + 1;
        const forecastYear = forecastDate.getFullYear();
        const forecastDateEl = forecastDate.createElement("p");
        forecastDateEl
        forecastDateEl
    }
}




}