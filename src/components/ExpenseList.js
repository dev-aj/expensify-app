import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

//Here we are also exporting this component as named export which is not connected to redux store
//this is done to test the component with dynamic props

export const ExpenseList = (props) => (           
    <div>
        {
          props.expenses.length === 0 ? (
            <p>No expenses</p>
          )  : (
            props.expenses.map( (expense) => {
                return <ExpenseListItem key={expense.id} {...expense} />;
            })
          )
        }
        
    </div>
);

// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses : state.expenses
//     };
// })(ExpenseList);

//The above code can be broken down into following parts

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);