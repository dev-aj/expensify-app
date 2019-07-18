import React from 'react';

import ConnectedExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary';
// import { LoginPage } from './LoginPage';


const ExpenseDashboardPage = ()=> (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ConnectedExpenseList />
    </div>
);

export default ExpenseDashboardPage; 