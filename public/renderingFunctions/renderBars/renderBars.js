import { filterByAmountOfGigs } from "../../logic/filters.js";

let xScale, yScale, colorScale, svg;

const padding = {
    top: 10,
    bottom: 25,
    left: 25,
    right: 10
}

export function renderBars() {

    const svgHeight = "100%", svgWidth  = "100%";

    const data = filterByAmountOfGigs();
    
    const maxAmountOfGigs = d3.max(data, d => d.amountOfGigs);
    
    svg = d3.select("#barsContainer")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);
    
    const boundingRect = svg.node().getBoundingClientRect();
    const width = boundingRect.width;
    const height = boundingRect.height;

    xScale = d3.scaleLinear().domain([0, maxAmountOfGigs]).range([padding.left, width - padding.right]);
    yScale = d3.scaleBand().domain(data).range([0, height - padding.bottom]).paddingInner(0.2).paddingOuter(0.4);
    colorScale = d3.scaleSequential().domain([0, maxAmountOfGigs]).interpolator(d3.interpolatePurples);
    
    const yAxisScale = d3.scaleBand().domain(d3.range(1,25)).range([0, height - padding.bottom]).padding(0.6);
    const barwidth = yScale.bandwidth();

    const yAxis = d3.axisLeft(yAxisScale).tickValues(d3.range(1,25));

    svg.append("g")
        .attr("transform", `translate(${padding.left},0)`)
        .call(yAxis)
        .selectAll("path,line")
        .remove();

    svg.append("g")
        .attr("id", "barGroup")
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("width", d => xScale(d.amountOfGigs) - xScale(0))
        .attr("height", barwidth)
        .attr("x", padding.left)
        .attr("y", (d, i, nodes) => yScale(d))
        .attr("fill", (d, i, nodes) => colorScale(d.amountOfGigs));

}

export function updateBars() {

    let newData = filterByAmountOfGigs();

    const newMax = d3.max(newData, d => d.amountOfGigs);
    xScale.domain([0, newMax]);
    colorScale.domain([0, newMax]);

    d3.select("#barGroup")
        .selectAll("rect")
        .data(newData)
        .transition()
        .duration(700)
        .attr("width", d => xScale(d.amountOfGigs) - xScale(0))
        .attr("fill", (d, i, nodes) => colorScale(d.amountOfGigs));

};