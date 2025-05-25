import { getClickedCities } from "./getClickedCities.js";

export function checkAllInputsEntered(event) {
    const allExpenseCategoryInputs = document.querySelectorAll(".expenseCategoryInput");
    const allExpenseAmountInputs = document.querySelectorAll(".expenseAmountInput");

    for (let input of allExpenseCategoryInputs) {
        if (!input.value) {
            self.alert("Ensure all fields are properly filled out.");
            return;
        }
    }

    for (let input of allExpenseAmountInputs) {
        if (isNaN(parseInt(input.value))) {
            self.alert("Ensure all 'amount' fields are properly filled out with only numbers.");
            return;
        }
    }

    document.querySelectorAll(".earningsAndExpensesUL")?.forEach( ele => ele.remove() );

    const selectedCitiesEarnings = getClickedCities();

    displayEarnings(selectedCitiesEarnings);
    displayExpenses()
    calculateTotalEarnings(selectedCitiesEarnings);
}

function displayEarnings(selectedCities) {

    const earningsDisplay = document.getElementById("earningsDisplay");
    const citiesList = document.createElement("ul");

    citiesList.classList.add("earningsAndExpensesUL");

    console.log(selectedCities);
    
    selectedCities.forEach( (city) => {
        const li = document.createElement("li");
        li.textContent = `${city.name}: ${city.earnings.toLocaleString()}:-`;
        li.innerHTML += `<div class="greenCircle"></div>`
        li.classList.add("earningsAndExpenseLI");
        citiesList.appendChild(li);
    });

    earningsDisplay.appendChild(citiesList);
}

function displayExpenses(expenseArray) {
    const expensesDisplay = document.getElementById("expensesDisplay");
    const expenseList = document.createElement("ul");
    const allInputExpenseCategories = document.querySelectorAll(".expenseCategoryInput");
    const allInputExpenseAmounts = document.querySelectorAll(".expenseAmountInput");
    
    expenseList.classList.add("earningsAndExpensesUL");

    allInputExpenseCategories.forEach( (category, index) => {
        const li = document.createElement("li");
        li.textContent = `${category.value}: ${(parseInt(allInputExpenseAmounts[index].value)).toLocaleString()}:-`;
        li.innerHTML += `<div class="redCircle"></div>`
        li.classList.add("earningsAndExpenseLI");
        expenseList.appendChild(li);
    });

    expensesDisplay.appendChild(expenseList);
}

function calculateTotalEarnings(selectedCitiesEarnings) {

    const allInputExpenseAmounts = document.querySelectorAll(".expenseAmountInput");
    const headerSummary = document.getElementById("summaryHeader");

    let totalExpenses = 0;
    allInputExpenseAmounts.forEach( input => totalExpenses += parseInt(input.value));
    let totalEarnings = 0;
    selectedCitiesEarnings.forEach( city => totalEarnings += parseInt(city.earnings));

    let totalSummary = totalEarnings - totalExpenses;

    let textColor = totalSummary < 0 ? "redText" : "greenText";

    headerSummary.innerHTML = `Summary: <span id=${textColor}>${totalSummary.toLocaleString()}:-</span>`;


}