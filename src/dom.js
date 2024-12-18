import { getWeather } from "./data";

const searchbar = document.querySelector("#search");
const confirmButton = document.querySelector(".confirm");
const dataDiv = document.querySelector(".data");

function displayData (data) {
    const location = document.createElement("div");
    const condition = document.createElement("div");
    const temperature = document.createElement("div");
    const description = document.createElement("div");
    const minMaxTemp = document.createElement("div");

    location.textContent = searchbar.value.toUpperCase();
    description.textContent = data.description;
    temperature.textContent = data.temperature + " °C";
    temperature.style.fontSize = "40px";
    minMaxTemp.textContent = "min: " + data.minTemp + " °C, max: " + data.maxTemp + " °C";

    dataDiv.append(location, temperature, description, minMaxTemp);
}

async function search() {
    while (dataDiv.lastChild) {
        dataDiv.removeChild(dataDiv.lastChild);
    }
    const processedData = await getWeather(searchbar.value);
    if (processedData === 1) {
        const error = document.createElement("div");
        error.textContent = "Location not found!"
        dataDiv.appendChild(error);
        return;
    }
    console.log(processedData);
    displayData(processedData);
}

confirmButton.addEventListener("click", search);
searchbar.addEventListener("keydown", (e) => {
    if (e.code === 'Enter') {
        search();
    }
})

