let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=a79b147b7791f4c09f3c781da76d6580';
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);

    document.getElementById("temp").innerHTML=weatherData.main.temp;
    let alt = weatherData.weather[0].description;
    document.getElementById("cc-alt").innerHTML =weatherData.weather[0].description;
    document.getElementById("humid").innerHTML =weatherData.main.humidity;
    document.getElementById("speed").innerHTML =weatherData.wind.speed;


    let t = weatherData.main.temp;
    let s = weatherData.wind.speed;
    if (t <= 50 && s >= 3) {
        let w = 35.74 + 0.6215 * t;
        let i = w - 35.75 * Math.pow(s, .16);
        let n = i + 0.4275 * t * Math.pow(s, .16);
        let windchill = Math.round(n * 100) / 100;
        document.getElementById("chill").innerHTML = windchill;
    } else
        document.getElementById("chill").innerHTML = "";

}