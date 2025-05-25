import { filterByEarnings } from "../logic/filters.js";

export function getClickedCities() {
    const allClickedElements = document.querySelectorAll(".clicked");
    const cityEarnings = filterByEarnings({usingForBottomMenu: true});
    let clickedCities = [];

    allClickedElements.forEach( (path) => {
        cityEarnings.forEach( (city) => {
            if (city.mapID == path.id) {
                clickedCities.push(city);
            }
        })
    });

    return clickedCities;
}