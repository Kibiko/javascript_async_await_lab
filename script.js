const submitButton = document.querySelector("#submit");
const countryInput = document.querySelector("#country-input");
let countryList = document.querySelector("ul");
const body = document.querySelector("body");
const h2 = document.querySelector("h2");
var delay = 2000; //milliseconds

const addCountryToList = (country) =>{
    //country name
    const countryLi = document.createElement("li");
    countryLi.textContent = country.name.common;

    //country population
    const populationLi = document.createElement("li");
    populationLi.className = "properties";
    populationLi.textContent = "Population: " + country.population;

    //country population
    const regionLi = document.createElement("li");
    regionLi.className = "properties";
    regionLi.textContent = "Region: " + country.region;

    
    countryLi.appendChild(populationLi);
    countryLi.appendChild(regionLi);
    countryList.appendChild(countryLi); 
}

const fetchCountryList = async () =>{
    try{
        const response = await fetch("https://restcountries.com/v3.1/all");
        if(!response.ok){
            throw new Error(`Fetch request failed with status code: ${response.status}`)
        }
        const jsonData = await response.json();
        return jsonData;
    } catch (error){
        body.textContent = 'Error! ' + error.message;
    }
}

const allPromises = [];
let allCountries = [];

const SetUp = () => {
    allPromises.push(fetchCountryList());
}

const populateHtml = () =>{
    Promise.all(allPromises)
    .then((allResults) => {

        allCountries = allResults.map((result) => result).flat();

        allCountries.forEach((country) =>{
            addCountryToList(country);
        })
    })
};

const findValues = () =>{
    h2.textContent = "Currently filtering...";
    const waitMessage = document.createElement("p");
    waitMessage.textContent = "<Awaiting API...>";
    h2.appendChild(waitMessage);
    countryList.remove();
    setTimeout(() =>{
    h2.textContent = "Filtered Countries";
    countryList.textContent = `Countries containing "${countryInput.value}":`;
    allCountries.forEach((country) => {
        if(country.name.common.toLowerCase().includes(countryInput.value.toLowerCase())){
            addCountryToList(country);
        }
    })
    body.appendChild(countryList);
    }, delay);
}

SetUp();

populateHtml();

submitButton.addEventListener("click", findValues);
