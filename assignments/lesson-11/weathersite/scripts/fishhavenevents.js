const requestTownDataURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const requestData = new XMLHttpRequest();
requestData.open('GET', requestTownDataURL);
requestData.responseType = 'json';
requestData.send();

requestData.onload = function () {
    let fishhavenData = requestData.response;
    let towns = fishhavenData['towns'];

    towns.forEach(town => {
        if (town.name == 'Fish Haven') {
            document.getElementById('fishhavenevents').innerHTML = town.events[0];
            document.getElementById('fishhavenevents1').innerHTML = town.events[1];
            document.getElementById('fishhavenevents2').innerHTML = town.events[2];
        }
    });
}