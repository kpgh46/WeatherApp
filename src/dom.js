import { weatherData } from "./basicWeatherData";

let dom = (() => {

    let render = () => {
        weatherData.getWeatherData();
    }

    // let createDivs = (temperature, high, low,)

    let tempDiv = (value) => {
        let div = document.querySelector("#temperature");
        div.textContent = value.toString();
    }

    let highLowDiv = (max, min) => {
        let high = document.querySelector("#high");
        let low = document.querySelector("#low");
        high.textContent = max.toString();
        low.textContent = min.toString();
    }

    let headerDiv = (value) => {
        let header = document.querySelector("#header");
        header.textContent = value.toUpperCase();
    }
    
    return {render, tempDiv, headerDiv, highLowDiv}

})();

export {dom}