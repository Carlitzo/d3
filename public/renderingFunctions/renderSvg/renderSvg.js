export function renderSvg() {

    const parent = document.querySelector(".mapSvg");
    const svg = d3.select(parent)
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%");

    const g = svg.append("g")
        .attr("transform", "scale(0.7)");

    fetch("./images/china.svg")
        .then(r => r.text())
        .then(text => {
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(text, "image/svg+xml");
            const importedSvg = svgDoc.documentElement;

            g.node().appendChild(importedSvg);

            d3.select(importedSvg).selectAll("path")
                .attr("fill", "#C7C7C7")
                .attr("stroke", "white")
                .attr("stroke-width", 1);
        })
        .catch(err => console.error("Failed to load SVG:", err));
}