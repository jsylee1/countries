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
}
console.log(displayCountryInfo);