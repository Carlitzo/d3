import { addExpenseButtonEvent } from "./addExpenseInputButton.js";

export function setEvents() {
    const btnAddExpense = document.getElementById("btnAddExpense");

    btnAddExpense.addEventListener("click", addExpenseButtonEvent);
}