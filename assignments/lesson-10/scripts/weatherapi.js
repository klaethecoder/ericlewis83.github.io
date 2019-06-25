let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=a79b147b7791f4c09f3c781da76d6580';

weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData)


    document.getElementById('cc-temp').innerHTML = weatherData.main.temp;

    let icon = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png'
    let desc = weatherData.weather[0].description;

    document.getElementById('cc-img').setAttribute('src', icon);
    document.getElementById('cc-img').setAttribute('alt', desc);
};