import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, editExpense, removeExpense, startAddExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);    //Here middleware list is optional

//Lifecycle method
beforeEach((done) => {
    const expenseData ={};
    expenses.forEach(({ id, description, amount, note, createdAt }) => {
        expenseData[id] = { description, amount, note, createdAt };
    });
    database.ref('expenses').set(expenseData).then(() => done());
})

test('should return remove expense', () => {
    const result = removeExpense({id:'123abc'});
    expect(result).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should return edit expense details', () => {
    const result = editExpense('123abc',{description:"rent"});
    expect(result).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        update:{
            description:"rent"
        }
    });
});

test('Should setup action object with provided value' ,() => {
   
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
       expense: expenses[2]
    });
});

test('Should add expense to database and redux-store', (done) => {      //done is used to test async test cases
    const expenseData = {
        description:"Mobile",
        amount: 50000,
        note:"After a long time",
        createdAt:1231
    };
    const store = createMockStore({});

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
                ...expenseData
            }
        });
        //promise chaining
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) =>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('Should add expense with default values to database and redux-store', (done) => {
    
    const store = createMockStore({});

    const expenseDefaults = {
        description:'',
        amount: 0,
        note:'',
        createdAt:0
    };

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
                ...expenseDefaults
            }
        });
        //promise chaining
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) =>{
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });
});

test('Should setup set expenses action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    });
});


test('Should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(()=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});