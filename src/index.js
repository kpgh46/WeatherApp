import './style.css';

let searchButton = document.querySelector('button');
let city;

async function getWeatherData() {
    let getLatLon = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=93c35c8be20c0a03a7c89fef63a281a2` , {mode: 'cors'});
    let convertLatLon = await getLatLon.json();

    let lat = convertLatLon.coord.lat;
    let lon = convertLatLon.coord.lon;

    let getData = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=93c35c8be20c0a03a7c89fef63a281a2`)
    let converData = await getData.json();

    console.log(converData);
}





//Event Listener
searchButton.addEventListener("click", () => {
    city = document.querySelector("#search").value;
    getWeatherData();
})


