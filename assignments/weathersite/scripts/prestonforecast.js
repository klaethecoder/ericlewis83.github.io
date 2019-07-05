let weatherforecast = new XMLHttpRequest();
let apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=a79b147b7791f4c09f3c781da76d6580';
weatherforecast.open('GET', apiURL, true);
weatherforecast.send();
weatherforecast.onload = function () {
    let forecastData = JSON.parse(weatherforecast.responseText);
    var weekday = new Array(7);
    weekday[0] = "Monday";
    weekday[1] = "Tuesday";
    weekday[2] = "Wednesday";
    weekday[3] = "Thursday";
    weekday[4] = "Friday";
    weekday[5] = "Saturday";
    weekday[6] = "Sunday";
    let count = 1;
    for (let i = 0; i < forecastData.list.length; i++) {
        if (forecastData.list[i].dt_txt.includes("18:00:00")) {
            document.getElementById("hitemp").innerHTML = weatherData.main.temp_max + '&deg;F';
            document.getElementById('imgforecast' + count).setAttribute('src', "https://openweathermap.org/img/w/" + forecastData.list[i].weather[0].icon + ".png");
            document.getElementById('dayforecast' + count).innerHTML = weekday[(new Date().getDay() + count - 1) % 7];
            count++;

        }
        if (count == 6) {
            break;
        }
    }
}