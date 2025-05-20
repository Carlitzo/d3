export function renderSvg() {

    const parents = document.querySelectorAll(".mapSvg");
    
    fetch("./images/china.svg")
        .then(r => r.text())
        .then(text => {
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(text, "image/svg+xml");
            const importedSvg = svgDoc.documentElement;

            parents.forEach( (parent) => {

                const svg = d3.select(parent)
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%");

                const g = svg.append("g")
                    

                const clone = importedSvg.cloneNode(true);

                g.node().appendChild(clone);

                d3.select(clone).selectAll("path")
                    .attr("fill", "#C7C7C7")
                    .attr("stroke", "white")
                    .attr("stroke-width", 1);
            });
        })
        .catch(err => console.error("Failed to load SVG:", err));
}