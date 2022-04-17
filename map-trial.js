const countriesList = document.getElementById("countries");
let countries; // will contain fetched data

countriesList.addEventListener("change", newCountrySelection);

function newCountrySelection(event) {
    displayCountryInfo(event.target.value);
}

fetch("https://restcountries.com/v2/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error:", err));

function initialize(countriesData) {
    countries = countriesData;
    let options = "";
    countries.forEach(country => options += `<option value="${country.alpha3Code}">${country.name}</option>`);
    countriesList.innerHTML = options;
    countriesList.selectedIndex = Math.floor(Math.random()*countriesList.length);
    displayCountryInfo(countriesList[countriesList.selectedIndex].value);
}

function displayCountryInfo(countryByAlpha3Code) {
    const countryData = countries.find(country => country.alpha3Code === countryByAlpha3Code);
    document.getElementById("fullname").innerHTML = countryData.name[1].official;
    document.getElementById("capital").innerHTML = countryData.capital;
    document.getElementById("population").innerHTML = countryData.population.toLocaleString("en-US");
    // document.getElementById("language").innerHTML = countryData.languages[0].name;
    document.getElementById("language").innerHTML = countryData.languages.map(lan => `${lan.name}`);
    document.getElementById("currencies").innerHTML = countryData.currencies.map(c => `${c.name} (${c.code}) `);
    document.getElementById("region").innerHTML = countryData.region;
    document.getElementById("subregion").innerHTML = countryData.subregion;
    document.querySelector("#flag-container img").src = countryData.flag;
    document.querySelector("#flag-container img").alt = `Flag of ${countryData.name}`;
    document.getElementById("map").innerHTML = `<br> Latitude: ${countryData.latlng[0]}, <br> Longtitude ${countryData.latlng[1]}`;

    console.log(countryByCca3.latlng)
}
console.log(displayCountryInfo);

// // let latitudeText = document.querySelector('.latitude');
// // let longitudeText = document.querySelector('.longitude');
// // let timeText = document.querySelector('.time');

let lat = countryData.latlng[0];
let long = countriesData.latlng[1];
// // let zoomLevel = 8;

// //drawing map interface on #map-div
// const map = L.map('map-div').setView(countryData.latlng[0], countryData.latlng[1], zoomLevel);

// // add map tiles from Mapbox's Static Tiles API
// /* Make sure you replaced 'your.mapbox.access.token' with your Mapbox API accessToken, otherwise the Map willnot show anything */
// /* to get Mapbox API accessToken --> https://account.mapbox.com/access-tokens/ (do Signup or SignIn) */
// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//   maxZoom: 18,
//   id: 'mapbox/streets-v11',
//   tileSize: 512,
//   zoomOffset: -1,
//   accessToken: 'your.mapbox.access.token'
// }).addTo(map);


// // adding the Marker to map
// const marker = L.marker([lat, long], { icon: icon }).addTo(map);

// function displayMap(lat, long) {
//     marker.setLatLng([lat, long]);
//     map.setView([lat, long]);
//     // updates other element's value
//     latitudeText.innerText = lat;
//     longitudeText.innerText = long;
    
//   }

//   displayMap();

var map = L.map('map');
 
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
tileSize: 512,
maxZoom: 18,
zoomOffset: -1,
id: 'mapbox/streets-v11',
accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN'
}).addTo(map);

L.mapbox.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
 
var map = L.mapbox.map('map')
.setView([lat, long], 9)
.addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));