// sätts på getElementById("btnAddExpense")

export function addExpenseButtonEvent(event) {
    const expenseInput = document.querySelectorAll(".expenseInput");

    if (expenseInput.length > 11) {
        console.log("max number added cuuh");
        return;
    }

    let highestNumber = 0;

    for (let ele of expenseInput) {
        let currentNumber = parseInt(ele.id.slice(7));
        if (currentNumber > highestNumber) highestNumber = currentNumber;
    }

    const expenseInputContainer = document.getElementById("inputContainer");

    const newExpenseContainer = document.createElement("div");
    const newExpenseNumber = highestNumber + 1;
    newExpenseContainer.id = `expense${ newExpenseNumber }`;
    newExpenseContainer.className = "expenseInput";

    newExpenseContainer.innerHTML = `
        <button class="removeExpenseBtn" id="removeExpenseBtn${ newExpenseNumber }">X</button>
        <div class="expenseCategoryContainer">
            <label for="expenseCategoryInput${ newExpenseNumber }">Expense Category</label>
            <input class="expenseCategoryInput" id="expenseCategoryInput${ newExpenseNumber }">                                    
        </div>
        <div class="expenseAmountContainer">
            <label for="expenseAmountInput${ newExpenseNumber }">Amount</label>
            <input class="expenseAmountInput" id="expenseAmountInput${ newExpenseNumber }">
        </div>
    `;

    expenseInputContainer.appendChild(newExpenseContainer);
    
    const removeExpenseBtn = document.getElementById(`removeExpenseBtn${ newExpenseNumber }`);
    removeExpenseBtn.addEventListener("click", removeExpenseBtnEvent)

    function removeExpenseBtnEvent (event) {
        const clickedElementID = event.currentTarget.id;
        const numberOfExpenseClicked = clickedElementID.slice(16);

        const expenseToRemove = document.getElementById(`expense${numberOfExpenseClicked}`);
        expenseToRemove.remove();
    }
}