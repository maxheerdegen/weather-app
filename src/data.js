async function getWeather(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=SD4V3AKRJAKVC5XPUBA84K46A&contentType=json`, {mode: 'cors'});
        const weatherData = await response.json();
        console.log(weatherData);
        return processData(weatherData);
    } catch(err) {
        console.log("Not found");
        return 1;
    }

}

function processData (weatherData) {
    const current =  weatherData.currentConditions;
    const temperature =  current.temp;
    const condition =  current.conditions;
    const description =  weatherData.description;
    const minTemp = weatherData.days[0].tempmin;
    const maxTemp = weatherData.days[0].tempmax;

    return { description, condition, temperature, minTemp, maxTemp };
}

async function getImage(searchTerm) {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=XorlfQwwaqnikgletS4aSr1gPRrRIiSQ&s=${searchTerm}`, {mode: "cors"})
        const imageData = await response.json();
        return imageData.data.images.original.url
    } catch {
        console.log("no image");
    }
};

export {  getWeather, processData, getImage }; 