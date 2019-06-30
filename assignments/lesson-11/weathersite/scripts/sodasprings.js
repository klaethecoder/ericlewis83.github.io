const requestTownDataURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const requestData = new XMLHttpRequest();
requestData.open('GET', requestTownDataURL);
requestData.responseType = 'json';
requestData.send();

requestData.onload = function () {
    let sodaspringsData = requestData.response;
    let towns = sodaspringsData['towns'];

    towns.forEach(town => {
        if (town.name == 'Soda Springs') {
            document.getElementById('sodaspringsevents').innerHTML = town.events[0];
            document.getElementById('sodaspringsevents1').innerHTML = town.events[1];
            document.getElementById('sodaspringsevents2').innerHTML = town.events[2];
        }
    });
}