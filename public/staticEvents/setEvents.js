import { addExpenseButtonEvent } from "./addExpenseInputButton.js";
import { checkAllInputsEntered } from "./calculateEvent.js";

export function setEvents() {
    const btnAddExpense = document.getElementById("btnAddExpense");
    const btnCalculate = document.getElementById("btnCalc");

    btnAddExpense.addEventListener("click", addExpenseButtonEvent);
    btnCalculate.addEventListener("click", checkAllInputsEntered);
}