const weatherBody = document.getElementById('weather-info');

function weatherApi() {
    const requestUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/retrievebulkdataset?&key=VPMU84SNM5D6G5XLFH3KYPUT3&taskId=82a56d62ad4f70cb80d9f307f0b74325&zip=false'

    fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            const currentWeather = document.createElement('p');
            currentWeather.textContent = 'Current: ' + data.currentConditions.conditions + ' Temp: ' + data.currentConditions.temp + 'F° Feels Like:' + data.currentConditions.feelslike + 'F°';
            weatherBody.appendChild(currentWeather);
            
            const todayWeatherDesc = document.createElement('p');
            const todayWeather = document.createElement('p');
            todayWeatherDesc.textContent = 'Today: ' + data.days[0].description;
            todayWeather.textContent = 'Average Temp: ' + data.days[0].temp + 'F° High Temp: ' + data.days[0].tempmax + 'F° Low Temp: ' + data.days[0].tempmin + 'F° Chance of Rain: ' + data.days[0].precipprob + '%';
            weatherBody.appendChild(todayWeatherDesc);
            weatherBody.appendChild(todayWeather);

            const tomorrowWeatherDesc = document.createElement('p');
            const tomorrowWeather = document.createElement('p');
            tomorrowWeatherDesc.textContent = 'Tomorrow: ' + data.days[1].description;
            tomorrowWeather.textContent = 'Average Temp: ' + data.days[1].temp + 'F° High Temp: ' + data.days[1].tempmax + 'F° Low Temp: ' + data.days[1].tempmin + 'F° Chance of Rain: ' + data.days[1].precipprob + '%';
            weatherBody.appendChild(tomorrowWeatherDesc);
            weatherBody.appendChild(tomorrowWeather);
        })
}

weatherApi();