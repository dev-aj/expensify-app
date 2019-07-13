import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('Should set default value', () => {
    const state = expensesReducer(undefined, {type:'@@INIT'});
    expect(state).toEqual([]);
});

test('Should remove expense By Id', () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]])
});

test('Should not remove expense By Id', () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id:5
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[1],expenses[2]])
});

test('Should Edit the expense', () => {
    const amount = 12008;
    const action = {
        type:'EDIT_EXPENSE',
        id:expenses[1].id,
        update:{ amount }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('Should not Edit the expense if id not found', () => {
    const amount = 12008;
    const action = {
        type:'EDIT_EXPENSE',
        id:'-1',
        update:{ amount }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should Add new Expense', () => {
    const expense = {
        id:'109',
        description:'Water Bill',
        amount:12312,
        createdAt:1212,
        note:''
    };
    const action = {
        type:'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses,expense]);
});

test('Should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses:[expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});