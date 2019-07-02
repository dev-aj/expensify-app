import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test("Should correctly render expenses Summary with 1 expense", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount = {1} expensesTotal={236} />);
    expect(wrapper).toMatchSnapshot();
});

test("Should correctly render expenses Summary with multiple expense", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount = {22} expensesTotal={24536} />);
    expect(wrapper).toMatchSnapshot();
});