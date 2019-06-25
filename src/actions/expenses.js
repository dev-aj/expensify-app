import uuid from 'uuid';

//- - - - - - - - - - - - --  - - -- - - -  --  -Action Generators(For Expense reducer) - - - - - - - - - - - - - - -

//Add Expenses

export const addExpense = ( 
    {
        description='',
        note = '',
        amount = 0,
        createdAt = 0
    } = {} ) => ({
        type: 'ADD_EXPENSE',
        expense:{
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
});


//Remove Expenses

export const removeExpense = ({ id } = {}) =>({
    type:'REMOVE_EXPENSE',
    id
});

//Edit Expense Action Generator

export const editExpense = ( id,update ) => ({
    type:'EDIT_EXPENSE',
    id,
    update
})
