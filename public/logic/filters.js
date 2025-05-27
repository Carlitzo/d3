import { applyFilters } from "./applyFilters.js";

export function filterByAmountOfGigs() {

    applyFilters();
    
    const selectedEthnicityText = document.querySelector("#ethnicityButtonsContainer > .selected").textContent.toLowerCase();
    const selectedGenderText = document.querySelector("#genderButtonsContainer > .selected").textContent.toLowerCase();
    const selectedYearText = document.querySelector("#yearButtonsContainer > .selected").textContent;

    const gigs = Gigs;
    const cities = Cities;
    const djs = DJs;

    let filteredDJs = djs.filter((element) => element.ethnicity === selectedEthnicityText && element.gender === selectedGenderText);
    let filteredGigs = [];

    filteredDJs.forEach((DJ) => {
        gigs.forEach((gig) => {
            if(DJ.id === gig.djID) {
                filteredGigs.push(gig);
            };
        })
    });

    if (selectedYearText !== "ALL") {
        filteredGigs = filteredGigs.filter(element => {
            let year = new Date(element.date).getFullYear().toString();
            return year === selectedYearText
        })
    }

    let amountOfGigsInCities = [];
    cities.forEach((element, index) => {
        amountOfGigsInCities[index] = {
            name: element.name,
            cityId: element.id,
            amountOfGigs: 0
        }
    })

    amountOfGigsInCities.forEach((element) => {
        for (let i = 0; i < filteredGigs.length; i++) {
            if (element.cityId === filteredGigs[i].cityID) {
                element.amountOfGigs++;
            }
        }
    })

    return amountOfGigsInCities
}

export function filterByEarnings({usingForBottomMenu}) {

    let selectedEthnicityText = "";
    let selectedGenderText = "";
    let selectedYearText = "";

    if (!usingForBottomMenu) {
        selectedEthnicityText = document.querySelector("#ethnicityButtonsContainer > .selected").textContent.toLowerCase();
        selectedGenderText = document.querySelector("#genderButtonsContainer > .selected").textContent.toLowerCase();
        selectedYearText = document.querySelector("#yearButtonsContainer > .selected").textContent;
    } else {
        selectedEthnicityText = document.querySelector("#bottomEthnicityButtonsContainer > .selected").textContent.toLowerCase();
        selectedGenderText = document.querySelector("#bottomGenderButtonsContainer > .selected").textContent.toLowerCase();
        selectedYearText = "2024";
    }

    const gigs = Gigs;
    const cities = Cities;
    const djs = DJs;

    let filteredDJs = djs.filter((element) => element.ethnicity === selectedEthnicityText && element.gender === selectedGenderText);
    let filteredGigs = [];

    filteredDJs.forEach((DJ) => {
        gigs.forEach((gig) => {
            if(DJ.id === gig.djID) {
                filteredGigs.push(gig);
            };
        })
    });

    if (selectedYearText !== "ALL") {
        filteredGigs = filteredGigs.filter(element => {
            let year = new Date(element.date).getFullYear().toString();
            return year === selectedYearText
        })
    }

    let citiesWithEarnings = [];
    for (let city of cities) {
        citiesWithEarnings.push( {
            name: city.name,
            cityID: city.id,
            mapID: 0,
            earnings: 0
        })
    }

    for (let i = 0; i < citiesWithEarnings.length; i++) {
        citiesWithEarnings[i].mapID = `city_${i + 1}`;
        for (let j = 0; j < filteredGigs.length; j++) {
            if (citiesWithEarnings[i].cityID === filteredGigs[j].cityID) {                
                citiesWithEarnings[i].earnings += filteredGigs[j].djEarnings;
            }
        }
    }

    return citiesWithEarnings;
}