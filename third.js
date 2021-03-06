//Global Variables
const countriesList = document.getElementById("countries");
let countries; // will contain fetched data

countriesList.addEventListener("change", newCountrySelection);

function newCountrySelection(event) {
    displayCountryInfo(event.target.value);
}

fetch("https://restcountries.com/v3/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error:", err));

function initialize(countriesData) {
    countries = countriesData;
    let options = "";
    countries.sort((countryOne, countryTwo) => countryOne.name.common.localeCompare(countryTwo.name.common, "en")).forEach(country => options += `<option value="${country.cca3}">${country.name.common}</option>`);
    countriesList.innerHTML = options;
    countriesList.selectedIndex = Math.floor(Math.random()*countriesList.length);
    displayCountryInfo(countriesList[countriesList.selectedIndex].value);
}

function displayCountryInfo(countryByCca3) {
    console.log(countryByCca3)
    const countryData = countries.find(country => country.cca3 === countryByCca3);
    document.getElementById("fullname").innerHTML = countryData.name.official;
    document.getElementById("capital").innerHTML = countryData.capital;
    document.getElementById("population").innerHTML = countryData.population.toLocaleString("en-US");
    console.log(countryData.currencies);
    // document.getElementById("language").innerHTML = countryData.languages[0].name;
    document.getElementById("language").innerHTML = Object.values(countryData.languages).map(lan => lan).join(", ");
    document.getElementById("currencies").innerHTML = Object.keys(countryData.currencies).map(c => {
        const currency = countryData.currencies[c];
        return `${currency.name} (${currency.symbol})<br>`;
      })
      .join("");
    document.getElementById("region").innerHTML = countryData.region;
    document.getElementById("subregion").innerHTML = countryData.subregion;
    document.querySelector("#flag-container img").src = countryData.flags[0];
    document.querySelector("#flag-container img").alt = `Flag of ${countryData.name}`;
    document.getElementById("map").innerHTML = `<br> Latitude: ${countryData.latlng[0]}, <br> Longtitude ${countryData.latlng[1]}`;
    document.getElementById("coord").innerHTML = `<br> (Latitude: ${countryData.latlng[0]}, Longtitude ${countryData.latlng[1]})`;
    
    const latitude = countryData.latlng[0];
    const longitude = countryData.latlng[1];
    
    var map = L.map('map').setView([latitude, longitude], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}
