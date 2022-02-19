import { weatherData } from "./basicWeatherData";

let dom = (() => {

    let render = () => {
        weatherData.getWeatherData();
    }

    function createDivs(temperature, high, low, feels, humidity, wind) {
        let args = [...arguments];
        let selectors = ["#temperature", "#high", "#low", "#feels-like", "#humidity", "#wind"];

        for (let i = 0; i < args.length; i++) {
            let div = document.querySelector(`${selectors[i]}`);
            div.textContent = args[i];
            if (selectors[i] === "#temperature" || selectors[i] === "#high" || selectors[i] === "#low" || selectors[i] === "#feels-like")
            div.textContent += "\u00B0";
        }

    }

    let headerDiv = (value) => {
        let header = document.querySelector("#header");
        header.textContent = value.toUpperCase();
    }
    
    return {render, headerDiv, createDivs}

})();

export {dom}