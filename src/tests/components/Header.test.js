import React from 'react';
import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';

//import ReactShallowRenderer from 'react-test-renderer/shallow';

test('Should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();

    //expect(wrapper.find('h1').length).toBe(1);          //.find() works like querySelector() of jQuery

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // //console.log(renderer.getRenderOutput());
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
