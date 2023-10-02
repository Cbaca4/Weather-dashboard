function initPage() {
var cityEl = document.getElementById("enter-city");
var searchEl = document.getElementById("search-button");
var clearEl = document.getElementById("clear-history");
var nameEl = document.getElementById("city-name");
var currentPicEl = document.getElementById("current-pic");
var currentTempEl = document.getElementById("temprature");
var currentHumidityEl = document.getElementById("humidity");
var currentWindEl = document.getElementById("wind-speed");
var historyEl = document.getElementById("history");
var fivedayEl = document.getElementById("fiveday-header");
var searchHistory = JSON.parse(localStorage.getItem("search"));

function getWeather(response) {
var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=31.4229&lon=103.4932&appid=bd4c39d9391cfb9dcf2a0b4f1bdac031"
fetch(requestUrl) .then(function (response) {
console.log(response);
if (response.status === 200){
todayweather.El.classList.remove("d-none");
 }
return response.json();
})

var currentDate = new Date(response.data.dt * 1000);
var day = currentDate.getDate();
var month = currentDate.getMonth(); 
var year = currentDate.getFullYear();
nameEl.innerHTML = response.data.name + "(" + month + day + "/" + year + ")";
var weatherPic = response.data.weather[0].icon;
currentPicEl.setAttribute("src", "https://openweathermap.org/img/wn/" + weatherPic);
currentPicEl.setAttribute("alt", response.data.weather[0].description);
currentTempEl.innerHTML = "temperature: " + (response.data.main.temp);
currentHumidityEl.innerHTML = "humidity: " + response.data.main.humidity;
currentWindEl.innerHTML = "Wind Speed: " + response.wind.speed + "MPH";


var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=31.4229&lon=103.4932&appid=bd4c39d9391cfb9dcf2a0b4f1bdac031";
fetch(forecastURL)
.then(function (response) {
fivedayEl.classList.remove("d-none");
var forecastEl = document.querySelectorAll(".forecast");
for (i = 0; i < forecastEl.length; i++) {
forecastEl[i].innerHTML ="";
var forecastDate = new Date(response.data.list[forecastIndex].dt *1000);
var forecastDay = forecastDate.getDate();
var forecastMonth = forecastDate.getMonth() + 1;
var forecastYear = forecastDate.getFullYear();
var forecastDateEl = forecastDate.createElement("p");
forecastDateEl.setAttribute("class", "mt-3 mb-0 forecast-date");
forecastDateEl.innerHTML = forecastMonth + "/" + forecastDay + "/" + forecastYear
forecastEl[i].append(forecastDateEl);

var forecastWeatherEl = document.createElement("img");
forecastWeatherEl.setAttribute("src", "https://openweather.org/img/wn/" + response.data.list[forecastIndex].weather[0].icon);
forecastWeatherEl.setAttribute("alt", response.data.list[forecastIndex].weather[0].description);
forecastEl[i].append(forecastDateEl);
var forecastTempEl = document.createElement("p");
forecastTempEl.innerHTML = "temp: " + (response.data.list[forecastIndex].main.temp);
forecastEl[i].append(forecastTempEl);
var forecastHumidityEl = document.createElement("p");
forecastHumidiityEl.innerHTML = "humidity: " + response.data.list[forecastIndex].main.humidity;
forecastEl[i].append(forecastHumidityEl);

}})};

searchEl.addEventListener("click", function() {
    var searchTerm = cityEl.valvue;
    getWeather(searchTerm);
    searchHistory.push(searchTerm);
    localStorage.setItem("search", JSON.stringify(searchHistory));
    renderSearchHistory();
})

clearEl.addEventListener("click", function () {
    localStorage.clear();
    searchHistory = [];
    renderSearchHistory();
})

function renderSearchHistory() {
    historyEl.innerHTML = "";
    for (let i = 0; i < searchHistory.length; i++) {
}}};