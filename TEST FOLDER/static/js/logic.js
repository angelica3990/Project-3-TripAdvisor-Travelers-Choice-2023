//Populate map section

// Read the JSON data using D3
d3.json("static/data/hotels_merged.json", function(data) {
  // Create a Leaflet map
  console.log("hi")
  var map = L.map('map').setView([0, 0], 2);

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


//loop through multiple .JSON files
// var filenames = ["hotels_merged.json", "destinations.json", "beaches_merged.json"];

// filenames.forEach(function(filename) {
//   d3.json("static/json/" + filename, function(data) {
//     // Create a Leaflet map
//     var map = L.map('map').setView([0, 0], 2);

//     // Add a tile layer
//     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(map);

//     // Loop through the JSON data and create markers
//     data.forEach(function(hotels) {
//       var marker = L.marker([hotels.latitude, hotels.longitude]).addTo(map);
//       marker.bindPopup(`<h1>${hotels.name}</h1> <hr> <h3>${hotels.description}</h3>`);
//     });
//   });
// });




// d3.json("/json/hotels_merged.json")
// var map = L.map('map').setView([51.505, -0.09], 5);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
// attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// var cities = [{
//     location: [40.7128, -74.0059],
//     name: "New York",
//     population: 8550405
//   },
//   {
//     location: [41.8781, -87.6298],
//     name: "Chicago",
//     population: 2720546
//   }
// ]  



// for (var i = 0; i < cities.length; i++) {
//     var city = cities[i];
//     L.marker(city.location)
//       .bindPopup(`<h1>${city.name}</h1> <hr> <h3>Population ${city.population.toLocaleString()}</h3>`)
//       .addTo(map);}

//       // Add an event listener to the HTML element
// var element = document.getElementById('hotels');
// element.addEventListener('click', function() {

// });

// //markers
// for (var i = 0; i < cities.length; i++) {
//     var city = cities[i];
//     L.marker(city.location)
//       .bindPopup(`<h1>${city.name}</h1> <hr> <h3>Population ${city.population.toLocaleString()}</h3>`)
//       .addTo(map);}

// var element = document.getElementById('myElement');
// element.addEventListener('click', function() {
// // Clear all existing layers from the map
// map.eachLayer(function(layer) {
//     map.removeLayer(layer);
//         });
    
// // Load new data and add new layers to the map
// d3.json("json/hotels_merged.json", function(error, data) {
//     if (error) throw error;
    
//     for (var i = 0; i < data.length; i++) {
//     var city = data[i];
//     L.marker(city.location)
//     .bindPopup(`<h1>${city.name}</h1> <hr> <h3>Population ${city.population.toLocaleString()}</h3>`)
//     .addTo(map);
//           }
//         });
//       });




  
