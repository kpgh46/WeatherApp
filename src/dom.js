import { weatherData } from "./basicWeatherData";

let dom = (() => {

    let render = () => {
        weatherData.getWeatherData();
    }
    
    return {render}

})();

export {dom}