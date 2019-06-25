import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//- - - - - - - - - - - - --  - - -- - - -  --  -Action Generators(For Expense reducer) - - - - - - - - - - - - - - -

//Add Expenses

const addExpense = ( 
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

const removeExpense = ({ id } = {}) =>({
    type:'REMOVE_EXPENSE',
    id
});

//Edit Expense Action Generator

const editExpense = ( id,update ) => ({
    type:'EDIT_EXPENSE',
    id,
    update
})

//Expenses reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch(action.type){
        case 'ADD_EXPENSE':
           return [...state, action.expense];
        
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.update
                    };
                } else {
                    return expense;
                };
            });

        case 'REMOVE_EXPENSE':
            return state.filter(( {id} ) => id !== action.id);
            
        default:
            return state;
    }
}


//- - - - - - - - - - - - --  - - -- - - -  --  -Action Generators(For Filter reducer) - - - - - - - - - - - - - - -

const setTextFilter = ( text='' ) => ({
    type:'SET_TEXT_FILTER',
    text
});

//sort by amount

const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT'
});

//sort by Date

const sortByDate = () => ({
    type:'SORT_BY_DATE'
});

//setStartDate

const setStartDate = (startDate) => ({
    type:'SET_START_DATE',
    startDate
});

//setEndDate

const setEndDate = (endDate) => ({
    type:'SET_END_DATE',
    endDate
})


//Default Value for filter reducer

const filterReducerDefaultState = {
    text:'',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

//Filter reducer

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            };

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy:'amount'
            };

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:'date'
            };

        case 'SET_START_DATE':
            return {
                ...state,
                startDate:action.startDate
            };

        case 'SET_END_DATE':
            return {
                ...state,
                endDate:action.endDate
            }

        default:
            return state;
    }
}


// - - - - - -  - - - -- - - - - ADDING FILTER LOGICS - -  - -- - - - - - - - - - - - - - 

//timestamps (milliseconds)
//0  = January1 1970(UNIX EPOCH)
//VAlid timestamps = 22121, 10, -8989

//Get Visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch  = !expense.description || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date')
        return a.createdAt < b.createdAt ? 1 : -1;
        else
        return a.amount < b.amount ? 1 : -1;
    });
};

// - -- - -Store

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount:100, createdAt:1000}));      //dispatch method returns the action and their effect as an object
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount:200, createdAt: 2000}));

//store.dispatch(removeExpense({id:expenseOne.expense.id}));

//store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}));

//  store.dispatch(setTextFilter('rent'));
//  store.dispatch(setTextFilter(''));

 store.dispatch(sortByAmount());
 store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(-1250));






const demoState = {
    expenses: [{
        id:'tadatada',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters:{
        text:'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}
