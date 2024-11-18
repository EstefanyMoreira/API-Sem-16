document.addEventListener('DOMContentLoaded', () => { 
    const apiKey = 'ff44ddb460ba1f090c476e8abfe510c6'; 
    const city = 'London,uk'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
    fetch(apiUrl) 
    .then(response => response.json()) 
    .then(data => { 
        const cityElement = document.getElementById('city'); 
        const temperatureElement = document.getElementById('temperature'); 
        const descriptionElement = document.getElementById('description'); // Asegúrate de que los datos existen antes de acceder a ellos 
        if (data.name) { cityElement.textContent = `City: ${data.name}`; 
    } else { 
        cityElement.textContent = `City: Not Found`; 
    } if (data.main && data.main.temp) { 
        temperatureElement.textContent = `Temperature: ${data.main.temp} °C`; 
    } else { temperatureElement.textContent = `Temperature: Not Available`; 

    } if (data.weather && data.weather[0] && data.weather[0].description) { 
        descriptionElement.textContent = `Description: ${data.weather[0].description}`; 
    } else { descriptionElement.textContent = `Description: Not Available`; } }) 
    .catch(error => console.error('Error fetching the weather data:', error)); 
});