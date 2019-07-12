let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5586437&units=imperial&APPID=3a18989acfc61f78f073dcff5a24e90c";
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


let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5596475&units=imperial&APPID=3a18989acfc61f78f073dcff5a24e90c";
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


let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5780026&units=imperial&APPID=3a18989acfc61f78f073dcff5a24e90c";
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


let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5856194&units=imperial&APPID=3a18989acfc61f78f073dcff5a24e90c";
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
