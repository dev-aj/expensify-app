import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('Should render ExpenseForm Correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});


test('Should render expense form with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
       preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change' ,() => {
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change' ,{
       target: { value } 
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on input change' ,() => {
    const value = 'New note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change' ,{
       target: { value } 
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount on valid input change' ,() => {
    const value = '12.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change' ,{
       target: { value } 
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount on Invalid input change' ,() => {
    const value = '12.510';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change' ,{
       target: { value } 
    });
    expect(wrapper.state('amount')).toBe('');
});

//Using spy

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit = {onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
       preventDefault: ()=>{ } 
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[1].description,
        amount:expenses[1].amount,
        note:expenses[1].note,
        createdAt: expenses[1].createdAt
    });
});

test('Should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('Should set calender focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calenderFocused')).toEqual(focused);
});