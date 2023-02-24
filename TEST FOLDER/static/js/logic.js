//Populate map section

// Read the JSON data using D3
d3.json("static/data/hotels_merged.json").then(function(data) { 
  // Create a Leaflet map
  var map = L.map('map').setView([51.505, -0.09], 13);

  // Add a tile layer
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);


  // Loop through the JSON data and create markers
  for (var i = 0; i < data.length; i++) {
    var hotels = data[i];
    var marker = L.marker([hotels.latitude, hotels.longitude]).addTo(map);
    marker.bindPopup(`<h1>${hotels.name}</h1> <hr> <h3>${hotels.description}</h3>`);
  }
});
