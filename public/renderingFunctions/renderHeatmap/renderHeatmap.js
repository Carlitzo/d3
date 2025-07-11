import { filterByEarnings } from "../../logic/filters.js";

export function renderHeatmap() {
    
    const data = filterByEarnings({usingForBottomMenu: false});

    const maxEarnings = d3.max(data, d => d.earnings);
    const colorScale = d3.scaleSequential().domain([0, maxEarnings]).interpolator(d3.interpolatePurples);

    data.forEach((element) => {
        let color = colorScale(element.earnings);

        d3.select(`#${element.mapID}`)
            .transition()
            .duration(700)
            .style("fill", color);
    })
}