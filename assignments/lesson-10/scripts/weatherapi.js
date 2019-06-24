let weatherRequest=new XMLHttpRequest();
let apiURLstring= 'https://api.openweathermap.org/data/2.5/weather?id=5604473&unit=imperial&APPIDa79b147b7791f4c09f3c781da76d6580';

weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload=function() {
letweatherData=JSON.parse(weatherRequest.responseText);
console.log(weatherData)};

document.getElementById('cc-temp').innerHTML=weatherData.main.temp;

let icon='http://openweathermap.org/img/w'+'WeatherData.Weather[0].icon,' +'10n'+'.png'
let desc=weatherData.weather.description;

document.getElementByID('cc-img').setAttribute('src', icon);
document.getElementByID('cc-img').setAttribute('alt', desc);
