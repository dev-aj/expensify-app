import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

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
    const expenseData = {
        description: 'Rent',
        amount:28128,
        createdAt:1000,
        note:"Last MOnth rent"
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
       expense:{
        ...expenseData,
        id:expect.any(String)  //Tocheck dynamic data
       }     
    });
});

test('Should setup action object with default value' ,() => {
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
       expense:{
        description: '',
        amount:0,
        createdAt:0,
        note:"",
        id:expect.any(String)  //Tocheck dynamic data
       }     
    });
})