function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeather);
    } else {
        alert("Geolocation not supported by this browser");
    }
}

function getWeather(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let lang = "es";
    let units = "metric";
    let API_KEY = "a367261c62c1d40bfd0e3ce67b1e27a0";
    let baseURL = `https://api.openweathermap.org/data/2.5/weather?lang=${lang}&units=metric&lat=${lat}&lon=${long}&appid=${API_KEY}`;

    $.get(baseURL, function (res) {
        let name = res.name;
        let temp = Math.floor(res.main.temp);
        let condition = res.weather[0].description;

        // Display data on the web page
        $('#name').html(name);
        $('#temp-main').html(`Temp: ${temp}°`);
        $('#condition').html(condition);
    })
}

navigator.geolocation.getCurrentPosition(getWeather);