export function renderBottomButtons(parent) {
    const parentContainer = document.getElementById(parent);
    let buttonData = [];

    switch (parent) {
        case "bottomEthnicityButtonsContainer":
            buttonData = findEthnicities();
            break;
        case "bottomGenderButtonsContainer":
            buttonData = findGenders();
            break;
    }

    for (let ele of buttonData) {
        let button = document.createElement("button");
        
        button.className = ele;
        button.textContent = ele.charAt(0).toUpperCase() + ele.slice(1);
        if (ele === "tau" || ele === "theta") button.classList.add("selected");
        

        button.addEventListener("click", (event) => {
            let nodeList = parentContainer.querySelectorAll("button");
            for (let btn of nodeList) {
                btn.classList.remove("selected");
            }
            event.target.classList.add("selected");
            console.log("DO SOMEFING");
        })

        parentContainer.appendChild(button);
    }


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