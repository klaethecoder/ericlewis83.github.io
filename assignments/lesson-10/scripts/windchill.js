if (t <= 50 && s >= 3) {
    let windchill = Math.round(n * 100) / 100;
    document.getElementById("chill").innerHTML = windchill;
} else
    document.getElementById("chill").innerHTML = "N/A";