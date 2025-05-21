export function renderCities(Parent) {
    const parent = document.getElementById(Parent);
    const cities = Cities;

    for (let i = 0; i < cities.length; i++) {
        let cityP = document.createElement("p");
        cityP.id = cities[i].name;
        cityP.textContent = `${(i + 1)}.  ${cities[i].name}`;

        parent.appendChild(cityP);
    }
}