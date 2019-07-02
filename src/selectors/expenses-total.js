// const selectExpensesTotal = (expenses) => {

//     if(expenses.length === 0){
//         return 0;
//     } else {
//         let expensesAmount = expenses.map((expense) => expense.amount);
    
//         let total = expensesAmount.reduce((previous, current) => previous+current, 0);
//         return total;
//     }
// }

// export default selectExpensesTotal;

export default (expenses) => {

        return expenses
            .map((expense) => expense.amount)
            .reduce((sum, value) => sum + value, 0);;
}
