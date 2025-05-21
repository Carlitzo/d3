export function renderCities(Parent) {
    const parent = document.getElementById(Parent);
    let citiesUL = document.createElement("ul");
    citiesUL.id = "citiesUL";
    parent.appendChild(citiesUL);
    const cities = Cities;

    for (let i = 0; i < cities.length; i++) {
        let cityLi = document.createElement("li");
        cityLi.id = cities[i].name;
        cityLi.textContent = `${(i + 1)}.  ${cities[i].name}`;

        citiesUL.appendChild(cityLi);
    }
}