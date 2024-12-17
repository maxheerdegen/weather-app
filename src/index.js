import "./styles.css";
import { getWeather, processData } from "./data";

const currentWeather = await getWeather("Tokyo");
console.log(currentWeather);
console.log(processData(currentWeather));