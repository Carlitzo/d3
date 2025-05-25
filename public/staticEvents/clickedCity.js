export let colorTracker = 0;
export let letterTracker = 0;
let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

export function clickedCityEvent(event) {
    console.log(event.currentTarget.className)
    if ( (event.currentTarget.id).includes("city") && (event.currentTarget.className.baseVal) != "clicked") {

        const colorScale = d3.scaleSequential().domain([0, 23]).interpolator(d3.interpolatePurples);

        d3.select("#bottomMap > svg > #" + event.currentTarget.id)
            .classed("clicked", true)
            .attr("fill", (d, i, nodes) => colorScale(colorTracker));

        colorTracker += 2;

        const svg = document.getElementById("bottomMap");

        const [x, y] = d3.pointer(event);

        const label = document.createElement("div");

        label.textContent = letters[letterTracker];
        label.style.position = "absolute";
        label.style.left = `${x}px`;
        label.style.top = `${y}px`;
        label.style.color = "black";
        label.style.pointerEvents = "none";
        label.style.fontSize = "1rem";

        svg.appendChild(label);

        letterTracker++;
    }
          // Add a check to see if selected


    
}

export function addClickEventsToPaths() {
    d3.select("#bottomMap")
        .select("svg")
        .selectAll("path")
        .on("click", (event) => clickedCityEvent(event));
}

export function resetCounts() {
    colorTracker = 0;
    letterTracker = 0;
}