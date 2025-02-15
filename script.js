const url = 'http://api.weatherapi.com/v1/current.json';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '04789b89a1cb48d68de125244251502'
    }
};

// Function to fetch and display weather data for a single city
const getWeather = (city) => {
  cityName.innerHTML = city; // Update the main city's name dynamically
  document.getElementById('loadingSpinner').style.display = 'block'; // Show loading spinner
  fetch(`${url}?key=04789b89a1cb48d68de125244251502&q=${city}`, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById('loadingSpinner').style.display = 'none'; // Hide loading spinner

      // Populate the main weather cards
      description.innerHTML = data.current.condition.text || "N/A";
      humidity.innerHTML = data.current.humidity || "N/A";
      humidity2.innerHTML = data.current.humidity || "N/A";
      location.innerHTML = data.location.name || "N/A";
      temperature.innerHTML = data.current.temp_c || "N/A";
      temperature2.innerHTML = data.current.temp_c || "N/A";
      wind_speed.innerHTML = data.current.wind_kph || "N/A";
      wind_speed2.innerHTML = data.current.wind_kph || "N/A";
      feelslike.innerHTML = data.current.feelslike_c || "N/A";
      dewpoint.innerHTML = data.current.dewpoint_c || "N/A";
      pressure.innerHTML = data.current.pressure_mb || "N/A";
      uv.innerHTML = data.current.uv || "N/A";
      visibility.innerHTML = data.current.vis_km || "N/A";
      wind_direction.innerHTML = data.current.wind_dir || "N/A";
      gust_speed.innerHTML = data.current.gust_kph || "N/A";
      country.innerHTML = data.location.country || "N/A";
      latitude.innerHTML = data.location.lat || "N/A";
      longitude.innerHTML = data.location.lon || "N/A";
      region.innerHTML = data.location.region || "N/A";
      localtime.innerHTML = data.location.localtime || "N/A";
      timezone.innerHTML = data.location.tz_id || "N/A";
    })
    .catch((err) => {
      console.error(err);
      document.getElementById('loadingSpinner').style.display = 'none'; // Hide loading spinner
    });
};

// Function to populate the table rows with weather data for predefined cities
const populateTable = () => {
  const cities = ["Goa", "Lucknow", "Mumbai", "Delhi", "Chennai", "Bangalore", "Hyderabad"]; // List of cities
  const tableRows = document.querySelectorAll("tbody tr");

  cities.forEach((city, index) => {
    fetch(`${url}?key=04789b89a1cb48d68de125244251502&q=${city}`, options)
      .then((response) => response.json())
      .then((data) => {
        const row = tableRows[index];
        const cells = row.querySelectorAll("td");

        // Fill the cells with fetched data
        cells[0].textContent = data.current.condition.text || "N/A"; // Description
        cells[1].textContent = data.current.humidity || "N/A"; // Humidity
        cells[2].textContent = data.current.temp_c || "N/A"; // Temperature
        cells[3].textContent = data.current.wind_kph || "N/A"; // Wind Speed
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
