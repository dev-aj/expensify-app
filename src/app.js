import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from "./selectors/expenses";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

// console.log(store.getState());

// store.dispatch(addExpense({description:'Water Bill', amount:4200}));
// store.dispatch(addExpense({description:'Rent', createdAt:1000, amount:420}));
// store.dispatch(addExpense({description:'Electricity Bill', amount:25063}));


// const state = store.getState();

// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
); 

ReactDOM.render(jsx, document.getElementById('app'));
