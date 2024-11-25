const url = 'https://cities-temperature.p.rapidapi.com/weather/v1/current';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '25558afb74msh7b53b97c3add671p10c372jsn6208de83bc19',
		'x-rapidapi-host': 'cities-temperature.p.rapidapi.com'
	}
};


// Function to fetch and display weather data for a single city
const getWeather = (city) => {
  cityName.innerHTML = city; // Update the main city's name dynamically
  fetch(`${url}?location=${city}`, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // Populate the main weather cards
      description.innerHTML = data.description || "N/A";
      humidity.innerHTML = data.humidity || "N/A";
      humidity2.innerHTML = data.humidity || "N/A";
      location.innerHTML = data.name || "N/A";
      temperature.innerHTML = data.temperature || "N/A";
      temperature2.innerHTML = data.temperature || "N/A";
      wind_speed.innerHTML = data.wind_speed || "N/A";
      wind_speed2.innerHTML = data.wind_speed || "N/A";
    })
    .catch((err) => console.error(err));
};

// Function to populate the table rows with weather data for predefined cities
const populateTable = () => {
  const cities = ["Goa", "Lucknow", "Mumbai", "Gurugram"]; // List of cities
  const tableRows = document.querySelectorAll("tbody tr");

  cities.forEach((city, index) => {
    fetch(`${url}?location=${city}`, options)
      .then((response) => response.json())
      .then((data) => {
        const row = tableRows[index];
        const cells = row.querySelectorAll("td");

        // Fill the cells with fetched data
        cells[0].textContent = data.description || "N/A"; // Description
        cells[1].textContent = data.humidity || "N/A"; // Humidity
        cells[2].textContent = data.temperature || "N/A"; // Temperature
        cells[3].textContent = data.wind_speed || "N/A"; // Wind Speed
      })
      .catch((err) => {
        console.error(`Error fetching data for ${city}:`, err);
      });
  });
};

// Event listener for the "Search" button
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const city = document.getElementById("city").value;
  getWeather(city);
});

// Fetch weather for the main city and populate the table
getWeather("Roorkee"); // Default city
populateTable(); // Fill the table with predefined cities
