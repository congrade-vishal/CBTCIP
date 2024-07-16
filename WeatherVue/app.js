document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '259dc05c38035c14572e474e0463deaa'; 
    const city = 'India';          // Default city
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const locationElement = document.getElementById('location');
            const weatherIconElement = document.getElementById('weather-icon');
            const temperatureElement = document.getElementById('temperature');
            const descriptionElement = document.getElementById('description');

            locationElement.innerHTML = `${data.name}, ${data.sys.country}`;
            weatherIconElement.src = `assets/icons/${data.weather[0].icon}.png`;
            temperatureElement.innerHTML = `${data.main.temp}°C`;
            descriptionElement.innerHTML = data.weather[0].description;
        })
        .catch(error => console.log('Error fetching weather data:', error));
});
