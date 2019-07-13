let apiURLstring1 = "https://api.openweathermap.org/data/2.5/weather?id=5586437&units=imperial&APPID=a79b147b7791f4c09f3c781da76d6580";
let weatherRequest1 = new XMLHttpRequest();
weatherRequest1.open('GET', apiURLstring1, true);
weatherRequest1.send();
weatherRequest1.onload = function () {
    let weatherData = JSON.parse(weatherRequest1.responseText);
    console.log(document.getElementById("boise-currently"))
    console.log(weatherData)
    document.getElementById("boise-hitemp").innerHTML = weatherData.main.temp_max;
    document.getElementById("boise-currently").innerHTML = weatherData.weather[0].main;
    document.getElementById("boise-windSpeed").innerHTML = weatherData.wind.speed;
    document.getElementById("boise-humidity").innerHTML = weatherData.main.humidity;
}


let apiURLstring2 = "https://api.openweathermap.org/data/2.5/weather?id=5596475&units=imperial&APPID=a79b147b7791f4c09f3c781da76d6580";
let weatherRequest2 = new XMLHttpRequest();
weatherRequest2.open('GET', apiURLstring2, true);
weatherRequest2.send();
weatherRequest2.onload = function () {
    let weatherData = JSON.parse(weatherRequest2.responseText);
    console.log(document.getElementById("hitemp"))
    console.log(weatherData)
    document.getElementById("if-hitemp").innerHTML = weatherData.main.temp_max;
    document.getElementById("if-currently").innerHTML = weatherData.weather[0].main;
    document.getElementById("if-windSpeed").innerHTML = weatherData.wind.speed;
    document.getElementById("if-humidity").innerHTML = weatherData.main.humidity;
}


let apiURLstring3 = "https://api.openweathermap.org/data/2.5/weather?id=5780026&units=imperial&APPID=a79b147b7791f4c09f3c781da76d6580";
let weatherRequest3 = new XMLHttpRequest();
weatherRequest3.open('GET', apiURLstring3, true);
weatherRequest3.send();
weatherRequest3.onload = function () {
    let weatherData = JSON.parse(weatherRequest3.responseText);
    console.log(document.getElementById("hitemp"))
    console.log(weatherData)
    document.getElementById("provo-hitemp").innerHTML = weatherData.main.temp_max;
    document.getElementById("provo-currently").innerHTML = weatherData.weather[0].main;
    document.getElementById("provo-windSpeed").innerHTML = weatherData.wind.speed;
    document.getElementById("provo-humidity").innerHTML = weatherData.main.humidity;
}


let apiURLstring4 = "https://api.openweathermap.org/data/2.5/weather?id=5856194&units=imperial&APPID=a79b147b7791f4c09f3c781da76d6580";
let weatherRequest4 = new XMLHttpRequest();
weatherRequest4.open('GET', apiURLstring4, true);
weatherRequest4.send();
weatherRequest4.onload = function () {
    let weatherData = JSON.parse(weatherRequest4.responseText);
    console.log(document.getElementById("hitemp"))
    console.log(weatherData)
    document.getElementById("slc-hitemp").innerHTML = weatherData.main.temp_max;
    document.getElementById("slc-currently").innerHTML = weatherData.weather[0].main;
    document.getElementById("slc-windSpeed").innerHTML = weatherData.wind.speed;
    document.getElementById("slc-humidity").innerHTML = weatherData.main.humidity;
}

/*Calculate windchill */
let cities = ["boise-", "if-", "provo-", "slc-"];
for(let i = 0; i< cities.length; i++){
    let cityTemp = document.getElementById(`${cities[i]}hitemp`).innerHTML;
    let cityWind = document.getElementById(`${cities[i]}windSpeed`).innerHTML;
    console.log(cityTemp)
    let t = Number(cityTemp);
    let s = Number(cityWind);
    let result = 35.74 + (0.6215 * t) - (35.75 * s ** 0.16) + (0.4275 * t * s ** 0.16);
    // let windchill = document.getElementById(`${cities[i]}windchill`).innerHTML = result.toFixed(1);
    // console.log(`number ${i}: ${t} , ${s}`)
    console.log(t, s, result)
    if (t <= 50 && s >= 3) {
        let windchill = Math.round(n * 100) / 100;
        document.getElementById(`${cities[i]}windchill`).innerHTML = windchill;
    } else
        document.getElementById(`${cities[i]}windchill`).innerHTML = "N/A";
}
