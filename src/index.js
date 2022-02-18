import './style.css';
import { dom } from './dom';
import { weatherData} from './basicWeatherData'

dom.render();
// console.log(weatherData.city)

document.addEventListener("click", (el) => {
    if (el.target.id === "btn"){
        let currentCity = document.querySelector("#search").value
        
        weatherData.updateCity(currentCity);
        dom.headerDiv(currentCity)
        weatherData.getWeatherData();

    }
})
