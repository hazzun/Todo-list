const API_KEY = "c652c5654244cadce6678d386a88befd";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function geoSuccess(position) {
    // console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url) // javascript가 대신 URL을 부름
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}
function geoError() {
    alert("error");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);