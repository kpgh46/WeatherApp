import './style.css';
import { dom } from './dom';
import { weatherData} from './basicWeatherData'

dom.render();
// console.log(weatherData.city)

document.addEventListener("click", (el) => {
    if (el.target.id === "btn"){
        weatherData.updateCity(document.querySelector("#search").value);
        weatherData.getWeatherData();
    }
})
