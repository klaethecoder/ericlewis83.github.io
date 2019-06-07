var high =76;
var tempaverage=55;
var wSpeed =5;


var windchill= 35.74 + 0.6215 * tempaverage - 35.75 * Math.pow(wSpeed, 0.16) + 0.4275 * tempaverage * Math.pow(wSpeed, 0.16);
windchill= Math.round(windchill)  +  "&deg;F";


document.getElementById ("windchill").innerHTML= windchill;
