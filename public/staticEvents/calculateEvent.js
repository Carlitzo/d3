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


    console.log("THIS SHOULDNT SHOW")
}

function calculateAndDisplayEarnings(selectedCities) {

}

function calculateAndDisplayExpenses(expenseArray) {

}

function calculateButtonEvent(arrayCitiesEarnings) {
    arrayCitiesEarnings = [{"name": "Khansaar", "earnings": 150000}, {"name": "Khansaar", "earnings": 275000}];


}