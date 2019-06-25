import { combineReducers, createStore } from 'redux';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';

// - -- - -Store
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    //this is to set up redux dev-tools
    );
    return store;
}