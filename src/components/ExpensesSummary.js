import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';


export const ExpensesSummary = ({ expenseCount, expenseTotal }) =>{
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    return (
        <div className="page-header">
           <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{ expenseCount }</span> { expenseWord } totalling<span> </span> 
                    <span><NumberFormat 
                        thousandSeparator={true} 
                        thousandsGroupStyle="lakh" 
                        prefix={'₹'} 
                        displayType="text" 
                        value={expenseTotal} 
                    /></span>
                </h1>
                <div className="page-header__actions">
                    <Link className="button-layout" to="/create">Add Expense</Link>                
                </div>
           </div>
        </div>
    );
}; 

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount : visibleExpenses.length,
        expenseTotal : selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);

