import { filterFunction } from "../../logic/filter.js";

let xScale, yScale, colorScale, svg;

const padding = {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10
}
export function renderBars() {
    const svgHeight = "100%", svgWidth  = "100%";

    const data = filterFunction();
    
    const maxAmountOfGigs = d3.max(data, d => d.amountOfGigs);
    const minAmountOfGigs = d3.min(data, d => d.amountOfGigs);
    
    svg = d3.select("#barsContainer")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    
    const boundingRect = svg.node().getBoundingClientRect();
    const width = boundingRect.width;
    const height = boundingRect.height;

    xScale = d3.scaleLinear().domain([0, maxAmountOfGigs]).range([padding.left, width]);
    yScale = d3.scaleBand().domain(data).range([0, height]).paddingInner(0.2).paddingOuter(0.4);
    colorScale = d3.scaleSequential().domain([0, maxAmountOfGigs]).interpolator(d3.interpolatePurples);
    
    const barwidth = yScale.bandwidth();

    const barGroup = svg.append("g")
        .attr("id", "barGroup")
        .selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("width", (d, i, nodes) => xScale(d.amountOfGigs))
            .attr("height", barwidth)
            .attr("x", padding.left)
            .attr("y", (d, i, nodes) => yScale(d))
            .attr("fill", (d, i, nodes) => colorScale(d.amountOfGigs));

}

export function updateBars() {

    let newData = filterFunction();

    const newMax = d3.max(newData, d => d.amountOfGigs);
    xScale.domain([0, newMax]);
    colorScale.domain([0, newMax]);

    const barGroup = d3.select("#barGroup")
        .selectAll("rect")
        .data(newData)
        .transition()
        .duration(700)
        .attr("width", (d, i, nodes) => xScale(d.amountOfGigs))
    
};