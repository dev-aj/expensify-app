import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('Should render expenseList with expenses array', () => {
    const wrapper = shallow(<ExpenseList expenses = {expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseList with empty expenses array', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});