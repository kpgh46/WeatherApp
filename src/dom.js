import { weatherData } from "./basicWeatherData";
import { addDays, addMonths, format} from 'date-fns';

let dom = (() => {
    let fiveDay = ["#one", "#two", "#three", "#four", "#five"];

    let render = () => {
        weatherData.getWeatherData();
    }

    function createDivs(temperature, high, low, feels, humidity, wind,) {
        let args = [...arguments];
        let selectors = ["#temperature", "#high", "#low", "#feels-like", "#humidity", "#wind", "#rain", "#date"];

        for (let i = 0; i < args.length; i++) {
            let div = document.querySelector(`${selectors[i]}`);
            div.textContent = args[i];
            if (selectors[i] === "#temperature" || selectors[i] === "#high" || selectors[i] === "#low" || selectors[i] === "#feels-like")
            div.textContent += "\u00B0";
            if(selectors[i] === "#rain" || selectors[i] === "#humidity" )
            div.textContent += "%";
        }
    }

    let currentDateTime = () => {
        let currentDate = new Date();
        let date = document.querySelector("#date");
        
        //Date
        let currentMonth = currentDate.getMonth()+1;
        let currentDay = currentDate.getDate();
        let currentYear = currentDate.getFullYear();

        //Time
        let currentHour = currentDate.getHours();
        let currentMinute = currentDate.getMinutes();
        let currentSeconds = currentDate.getSeconds();

        date.innerHTML = `Date: ${currentMonth} / ${currentDay} / ${currentYear} Time: ${currentHour}:${currentMinute}:${currentSeconds}`;
        
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
            maxTempDiv.textContent = daily[i+2].temp.max;
            maxTempDiv.textContent += "\u00B0";

            //min temp
            let minTempDiv = document.createElement('div')
            minTempDiv.textContent = daily[i+2].temp.min;
            minTempDiv.textContent += "\u00B0";

            let icon = document.createElement("i");
            if (daily[i+2].weather[0].main === "Clouds"){
                icon.classList = "fas fa-solid fa-cloud";
            }
            if (daily[i+2].weather[0].main === "Rain"){
                icon.classList = "fa-solid fa-cloud-rain";
            }
            if (daily[i+2].weather[0].main === "Snow"){
                icon.classList = "fa fa-solid fa-snowflake";
            }
            if (daily[i+2].weather[0].main === "Clear"){
                icon.classList = "fa-solid fa-sun";
            }
            

            //append
            div.appendChild(headerDiv)
            div.appendChild(maxTempDiv);
            div.appendChild(minTempDiv)
            div.appendChild(icon);

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
    
    return {render, headerDiv, createDivs, createFiveDay, clearFiveDay, currentDateTime}

})();

export {dom}