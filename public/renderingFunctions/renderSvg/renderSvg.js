import { renderHeatmap } from "../renderHeatmap/renderHeatmap.js";

export async function renderSvg() {
    const parents = document.querySelectorAll(".mapSvg");

    fetch("./images/china.svg")
        .then(r => r.text())
        .then(text => {
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(text, "image/svg+xml");
            const importedSvg = svgDoc.documentElement;

            parents.forEach((parent, index) => {
                

                const clone = importedSvg.cloneNode(true);

                if (index === 0) {
                    const defs = svgDoc.createElementNS("http://www.w3.org/2000/svg", "defs");
                    const pattern = svgDoc.createElementNS("http://www.w3.org/2000/svg", "pattern");
                    pattern.setAttribute("id", "diagonalHatch");
                    pattern.setAttribute("patternUnits", "userSpaceOnUse");
                    pattern.setAttribute("width", "6");
                    pattern.setAttribute("height", "6");
    
                    const path = svgDoc.createElementNS("http://www.w3.org/2000/svg", "path");
                    path.setAttribute("d", "M0,0 l6,6");
                    path.setAttribute("stroke", "#1E1E1E");
                    path.setAttribute("stroke-width", "1");
    
                    pattern.appendChild(path);
                    defs.appendChild(pattern);
                    clone.insertBefore(defs, clone.firstChild);
    
                    parent.appendChild(clone);
    
                    d3.select(clone)
                        .attr("width", "100%")
                        .attr("height", "100%")
                        .selectAll("path")
                        .attr("fill", "url(#diagonalHatch)")
                        .attr("stroke", "white")
                        .attr("stroke-width", 1);   
                } else {

                    parent.appendChild(clone);

                    d3.select(clone)
                        .attr("width", "100%")
                        .attr("height", "100%")
                        .selectAll("path")
                        .attr("stroke", "white")
                        .attr("stroke-width", 1);
                }


                renderHeatmap();
            });
        })
        .catch(err => console.error("Failed to load SVG:", err));
}
