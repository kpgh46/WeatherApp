import { weatherData } from "./basicWeatherData";

let dom = (() => {

    let render = () => {
        weatherData.getWeatherData();
    }

    let tempDiv = (value) => {
        let div = document.querySelector("#temperature");
        div.textContent = value.toString();
    }
    
    return {render, tempDiv}

})();

export {dom}