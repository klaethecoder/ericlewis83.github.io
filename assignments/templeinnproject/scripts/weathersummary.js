let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5586437&units=imperial&APPID=a79b147b7791f4c09f3c781da76d6580";
let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();
weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    document.getElementById("hitemp").innerHTML = weatherData.main.temp_max;
    document.getElementById("currently").innerHTML = weatherData.weather[0].main;
    document.getElementById("windspeed").innerHTML = weatherData.wind.speed;
    document.getElementById("humidity").innerHTML = weatherData.main.humidity;
}


let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5596475&units=imperial&APPID=a79b147b7791f4c09f3c781da76d6580";
let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();
weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    document.getElementById("hitemp").innerHTML = weatherData.main.temp_max;
    document.getElementById("currently").innerHTML = weatherData.weather[0].main;
    document.getElementById("windspeed").innerHTML = weatherData.wind.speed;
    document.getElementById("humidity").innerHTML = weatherData.main.humidity;
}


let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5780026&units=imperial&APPID=a79b147b7791f4c09f3c781da76d6580";
let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();
weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    document.getElementById("hitemp").innerHTML = weatherData.main.temp_max;
    document.getElementById("currently").innerHTML = weatherData.weather[0].main;
    document.getElementById("windspeed").innerHTML = weatherData.wind.speed;
    document.getElementById("humidity").innerHTML = weatherData.main.humidity;
}


let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5856194&units=imperial&APPID=a79b147b7791f4c09f3c781da76d6580";
let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();
weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    document.getElementById("hitemp").innerHTML = weatherData.main.temp_max;
    document.getElementById("currently").innerHTML = weatherData.weather[0].main;
    document.getElementById("windspeed").innerHTML = weatherData.wind.speed;
    document.getElementById("humidity").innerHTML = weatherData.main.humidity;
}



/*Calculate windchill*/
let t = parseFloat(document.getElementById('hitemp').innerHTML);
let s = parseFloat(document.getElementById('windspeed').innerHTML);
let result = 35.74 + (0.6215 * t) - (35.75 * s ** 0.16) + (0.4275 * t * s ** 0.16);
document.getElementById('windchill').innerHTML = result.toFixed(1);
if (t <= 50 && s >= 3) {
    let windchill = Math.round(n * 100) / 100;
    document.getElementById('windchill').innerHTML = windchill;
} else
    document.getElementById('windchill').innerHTML = "N/A";