import { getWeather, processData } from "./data";

const searchbar = document.querySelector("#search");
const confirmButton = document.querySelector(".confirm");

confirmButton.addEventListener("click", async () => {
    const weatherData = await getWeather(searchbar.value);
    const processedData = processData(weatherData);
})

