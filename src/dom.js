import { weatherData } from "./basicWeatherData";
import { addDays, addMonths, format} from 'date-fns';

let dom = (() => {
    let fiveDay = ["#one", "#two", "#three", "#four", "#five"];

    let render = () => {
        weatherData.getWeatherData();
    }

    function createDivs(temperature, high, low, feels, humidity, wind,) {
        let args = [...arguments];
        let selectors = ["#temperature", "#high", "#low", "#feels-like", "#humidity", "#wind"];

        for (let i = 0; i < args.length; i++) {
            let div = document.querySelector(`${selectors[i]}`);
            div.textContent = args[i];
            if (selectors[i] === "#temperature" || selectors[i] === "#high" || selectors[i] === "#low" || selectors[i] === "#feels-like")
            div.textContent += "\u00B0";
        }

    }

    let createFiveDay = (daily) => {
    

        for (let i = 0; i < fiveDay.length; i++) {
            let div = document.querySelector(`${fiveDay[i]}`);

            //day
            let headerDiv = document.createElement('h3');
            let now = new Date();
            let newDate = addDays(now,i+1);
            let formattedDate = format(newDate, "EEEE");
            headerDiv.textContent = formattedDate;

            //max temp
            let maxTempDiv = document.createElement('div')
            maxTempDiv.textContent = daily[i].temp.max;
            maxTempDiv.textContent += "\u00B0";

            //min temp
            let minTempDiv = document.createElement('div')
            minTempDiv.textContent = daily[i].temp.min;
            minTempDiv.textContent += "\u00B0";

            //append
            div.appendChild(headerDiv)
            div.appendChild(maxTempDiv);
            div.appendChild(minTempDiv)

        }

    }

    let clearFiveDay = () => {
        for (let i = 0; i < fiveDay.length; i++){
        let div = document.querySelector(`${fiveDay[i]}`);
            while(div.firstChild){
                div.removeChild(div.firstChild)
            }
        }
    }

    let headerDiv = (value) => {
        let header = document.querySelector("#header");
        header.textContent = value.toUpperCase();
    }
    
    return {render, headerDiv, createDivs, createFiveDay, clearFiveDay}

})();

export {dom}