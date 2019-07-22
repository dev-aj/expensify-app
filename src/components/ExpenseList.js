import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

//Here we are also exporting this component as named export which is not connected to redux store
//this is done to test the component with dynamic props

export const ExpenseList = (props) => (           
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">
        {
          props.expenses.length === 0 ? (
            <div className="list-item list-item--message">
              <span>No expenses</span>
            </div>
          )  : (
            props.expenses.map( (expense) => {
                return <ExpenseListItem key={expense.id} {...expense} />;
            })
          )
        }
      </div>
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