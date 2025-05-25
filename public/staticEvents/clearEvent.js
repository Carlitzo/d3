import { resetCounts } from "./clickedCity.js";

export function clearEvent(event) {
    const numberElements = document.querySelectorAll("#bottomMap > div");
    console.log(numberElements);
    numberElements.forEach( element => element.remove() );

    d3.selectAll("#bottomMap > svg > path")
        .attr("fill", "black")
        .classed("clicked", false);

    resetCounts();
}