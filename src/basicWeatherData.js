import {dom} from './dom';

let weatherData = (() => {

    let city = "miami"
    let searchButton = document.querySelector('button');

    async function getWeatherData() {
        let getLatLon = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=93c35c8be20c0a03a7c89fef63a281a2` , {mode: 'cors'});
        let convertLatLon = await getLatLon.json();

        let lat = convertLatLon.coord.lat;
        let lon = convertLatLon.coord.lon;

        let getData = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=93c35c8be20c0a03a7c89fef63a281a2`)
        let converData = await getData.json();

        let temp = converData.current.temp;
        let high = converData.daily[0].temp.max;
        let low = converData.daily[0].temp.min;
        let feels = converData.current.feels_like;
        let humidity = converData.current.humidity;
        let wind = converData.current.wind_speed;

        dom.createDivs(temp, high, low, feels, humidity, wind)

        console.log(converData)
    }

    let updateCity = (value) => {
        city = value;
        return city;
    }


    return {getWeatherData, updateCity}

})();

export { weatherData };