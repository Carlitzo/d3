export function renderTopButtons(parent) {
    const parentContainer = document.getElementById(parent);
    let buttonData = [];

    switch (parent) {
        case "ethnicityButtonsContainer":
            buttonData = findEthnicities();
            break;
        case "genderButtonsContainer":
            buttonData = findGenders();
            break;
        case "yearButtonsContainer":
            buttonData = findYears();
            break;
    }

    for (let i = 0; i < buttonData.length; i++) {
        const ele = buttonData[i];
        let button = document.createElement("button");

        if (isNaN(ele)) {
            button.className = ele;
            button.textContent = ele.charAt(0).toUpperCase() + ele.slice(1);
        } else {
            button.className = `year-${ele}`;
            button.textContent = ele;
        }

        if (i === 0) {
            button.classList.add("selected");
        }

        parentContainer.appendChild(button);
    }
}


function findYears() {
    const gigs = Gigs; //plockar ut gigs från dataset för tydlighet

    let years = [];
    for (let i = 0; i < gigs.length; i++) {
        const date = new Date(gigs[i].date);
        const year = date.getFullYear();

        if (!years.includes(year)) {
            years.push(year);
        }
    }
    
    const sortedYears = years.sort();
    sortedYears.push("ALL");
    
    return sortedYears;
}

function findGenders() {
    const DJS = DJs; //plockar ut DJS från dataset för tydlighet
    const genders = [];

    for (let i = 0; i < DJS.length; i++) {
        let gender = DJS[i].gender
        
        if (!genders.includes(gender)) {
            genders.push(gender);
        }
    }

    return genders;
}

function findEthnicities() {
    const DJS = DJs; //plockar ut DJS från dataset för tydlighet
    const ethnicities = [];

    for (let i = 0; i < DJS.length; i++) {
        let ethnicity = DJS[i].ethnicity;

        if (!ethnicities.includes(ethnicity)) {
            ethnicities.push(ethnicity);
        }
    }

    return ethnicities;
}