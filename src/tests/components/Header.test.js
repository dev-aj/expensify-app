import React from 'react';
import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json';
import { Header } from '../../components/Header';

//import ReactShallowRenderer from 'react-test-renderer/shallow';

test('Should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={ () => {}} />);
    expect(wrapper).toMatchSnapshot();

    //expect(wrapper.find('h1').length).toBe(1);          //.find() works like querySelector() of jQuery

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // //console.log(renderer.getRenderOutput());
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('Should call startLogout on Logout button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});