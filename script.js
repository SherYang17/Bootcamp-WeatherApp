// You must display the following data points on the page from the API:
// Current Date, City from the zipcode, Current temperature in ferinheight, current conditions, Temp Hi/Lo
// Weather App JavaScript

// API Key
const apiKey = "74a3078dc2519a7a5635d152da8475f4";

// Variables from assignment + user inputs
const zipInput = document.querySelector("#zipInput");       // user typing in zipcode
const cityInput = document.querySelector("#cityInput");     // user typing in city
const currentDate = document.querySelector("#currentDate"); // Current Date
const city = document.querySelector("#city");               // City from the zipcode
const currentTemp = document.querySelector("#currentTemp"); // Current temperature in ferinheight.... the conversion is in the Url
const currentConditions = document.querySelector("#currentConditions"); // current conditions
const tempHiLo = document.querySelector("#tempHiLo");       // Temp Hi/Lo

// Functions
// Function to display weather
function displayWeather(data) {
    // currentDate.innerText = new Date().toLocaleDateString(); // grab todays current date, not in the api
    const currentDate = document.getElementById("currentDate"); // this one grabs date too..
    currentDate.innerText = new Date().toDateString();          // grabs date in a neater way than above, day, month, date, year
    city.innerText = data.name;                              // change text
    currentTemp.innerText = data.main.temp + "°F";           // main.temp for main temperature
    currentConditions.innerText = data.weather[0].description; // data.weather.description for conditions statement... okay??? but how do they know it's a 0??? https://stackoverflow.com/questions/61301790/how-to-get-the-weather-description-from-openweathermap-api
    tempHiLo.innerText = "High: " + data.main.temp_max + "°F | Low: " + data.main.temp_min + "°F"; // highs and low temperature
}

// Function to fetch ZIP
function getWeatherByZip(zip) {
    fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&appid=" + apiKey + "&units=imperial")
    .then(response => response.json())
    .then(data => displayWeather(data))
}

// Function to fetch City
function getWeatherByCity(cityName) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=imperial")
    .then(response => response.json())
    .then(data => displayWeather(data))
    // .catch(error => city.innerText("Error: " + error))
    // .catch(error => console.log("Error: " + error));
}

// Function to get the weather
function getWeather() {
    const userInput = cityInput.value;
    // If user types a number, bring in zip otherwise if typing text, bring in city
    if (!isNaN(userInput)) {            // if a number is not a zipcode continue down but if it is do zip func
        getWeatherByZip(userInput);
      } else {                          // else regular text equals city
        getWeatherByCity(userInput);
      }
}

// Event Listener for when user changes the cityInput, trigger this. 
cityInput.addEventListener("change", function() {
    getWeather();
});




// For temperature in Fahrenheit use units=imperial or &units=imperial


// Fetch city
// Fetch City https://openweathermap.org/current#name
// Example -> https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// Fetch zip
// Fetch Zip  https://openweathermap.org/current#name
// Example -> https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
// Example -> https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid={API key}


// Displaying dates
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
// https://www.w3schools.com/js/js_dates.asp

// example https://www.youtube.com/watch?v=nngRb5M8UgM
// example  https://www.youtube.com/watch?v=WZNG8UomjSI




// searchButton.addEventListener("click", function() {
//     getWeather();
// });


// zipInput.addEventListener("change", function() {
//     getWeatherByZip(zipInput.value);
// });