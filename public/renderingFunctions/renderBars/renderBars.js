export function renderBars() {
    const svgHeight = "100%", svgWidth  = "100%";

    const padding = {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10
    }

    const svg = d3.select("#barsContainer")
        .append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight)
        .style("background", "hotpink");

    const gigs = Gigs;
    console.log(gigs);
    const cities = Cities;
    console.log(cities);

}

export function updateBars(event) {

    const selectedEthnicity = document.querySelector("#ethnicityButtonsContainer > .selected");
    const selectedGender = d3.select("#genderButtonsContainer").select(".selected");
    const selectedYear = d3.select("#yearButtonsContainer").select(".selected");

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

    console.log(selectedEthnicity);

};