import React from 'react';
import { shallow } from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpenses, history, wrapper;
beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpenses = jest.fn();
    history = {push:jest.fn()};

    wrapper = shallow(
        <EditExpensePage 
         startEditExpense={ startEditExpense } 
         startRemoveExpenses={ startRemoveExpenses } 
         history={ history }
         expense={expenses[2]}
        />
    );
});
 

test('Should render editExpense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle startRemoveExpenses', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpenses).toHaveBeenLastCalledWith({id: expenses[2].id});
});

