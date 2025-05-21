export function renderBars() {
    const svgHeight = "100%", svgWidth  = "100%";

    const svg = d3.select("#barsContainer")
        .append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight)
        .style("background", "hotpink");
}