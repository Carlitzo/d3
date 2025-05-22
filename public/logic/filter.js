

export function filterFunction() {
    const selectedEthnicityContainer = document.getElementById("ethnicityButtonsContainer");
    const selectedEthnicity = selectedEthnicityContainer.querySelector(".selected");
    const selectedGenderContainer = document.getElementById("genderButtonsContainer");
    const selectedGender = selectedGenderContainer.querySelector(".selected");
    const selectedYearContainer = document.getElementById("yearButtonsContainer");
    const selectedYear = selectedYearContainer.querySelector(".selected");
    
    if (!selectedEthnicity || !selectedGender || !selectedYear) {
        const tau = document.querySelectorAll(".tau");
        const theta = document.querySelectorAll(".theta");
        const all = document.querySelector(".ALL");
        
        tau.forEach((element) => {
            element.classList.add("selected");
        })
        theta.forEach((element) => {
            element.classList.add("selected");
        })
        all.classList.add("selected");
    }
    
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