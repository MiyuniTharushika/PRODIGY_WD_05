function getWeather() {
    const locationInput = document.getElementById('locationInput').value;
    const apiKey = '3d017d1221e8960477238db4e0515f84'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=colombo&appid=3d017d1221e8960477238db4e0515f84&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Condition: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
