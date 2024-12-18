import "./styles.css";
import { getWeather, processData } from "./data";
import "./dom.js";

const currentWeather = await getWeather("Tokyo");
console.log(currentWeather);
console.log(processData(currentWeather));