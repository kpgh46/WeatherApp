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

        dom.tempDiv(converData.current.temp);
        dom.highLowDiv(converData.daily[0].temp.max,converData.daily[0].temp.min);



        console.log(converData)
    }

    let updateCity = (value) => {
        city = value;
        return city;
    }


    return {getWeatherData, updateCity}

})();

export { weatherData };