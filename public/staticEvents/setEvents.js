import { addExpenseButtonEvent } from "./addExpenseInputButton.js";
import { checkAllInputsEntered } from "./calculateEvent.js";
import { clearEvent } from "./clearEvent.js";

export function setEvents() {
    const btnAddExpense = document.getElementById("btnAddExpense");
    const btnCalculate = document.getElementById("btnCalc");
    const btnClear = document.getElementById("btnClear");

    btnAddExpense.addEventListener("click", addExpenseButtonEvent);
    btnCalculate.addEventListener("click", checkAllInputsEntered);
    btnClear.addEventListener("click", clearEvent);
}