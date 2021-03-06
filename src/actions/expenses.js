import uuid from 'uuid';
import database from  '../firebase/firebase';
//- - - - - - - - - - - - --  - - -- - - -  --  -Action Generators(For Expense reducer) - - - - - - - - - - - - - - -
// - - - -- - -- -  What and how action generator work - -- - -
//1.Component calls action generator
//2.Action generator returns object
//3.Component dispatches object
//4.redux store changes
 
// - - - -- With asynchronous actions

//1.Component calls action generator
//2.Action generator returns function
//3.Component dispatches function(?)
//4.function runs (has the ability to dispatch other actions and do whatever it wants)


//Add Expenses

export const addExpense = (expense) => ({
        type: 'ADD_EXPENSE',
        expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch,getState) =>{
        const uid = getState().auth.uid;
        const {
            description='',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };

        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense 
            }));
        });
    };
};

//Remove Expenses

export const removeExpense = ({ id } = {}) =>({
    type:'REMOVE_EXPENSE',
    id
});

export const startRemoveExpenses = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() =>{
            dispatch(removeExpense({ id }));
        });
    };
};



//Edit Expense Action Generator

export const editExpense = ( id,update ) => ({
    type:'EDIT_EXPENSE',
    id,
    update
});

export const startEditExpense = (id, update) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(update).then( () => {
            dispatch(editExpense(id, update));
        });
        
    };
};

// - -- - -- - -- -- - To fetch data - - -- - -- 

//SET_EXPENSES 
export const setExpenses = (expenses) => ({
    type:'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = [];

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id:childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        });
    }
};