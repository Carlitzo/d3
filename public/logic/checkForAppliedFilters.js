
export function checkForAppliedFilters() {
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
}