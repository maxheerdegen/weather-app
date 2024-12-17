async function getWeather(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=SD4V3AKRJAKVC5XPUBA84K46A&contentType=json`, {mode: 'cors'});
    const weatherData = await response.json();
    return weatherData;
}

function processData (weatherData) {
    const current =  weatherData.currentConditions;
    const temperature =  current.temp;
    const conditions =  current.conditions;
    const description =  weatherData.description;

    return { description, conditions, temperature };
}

export {  getWeather, processData }; 