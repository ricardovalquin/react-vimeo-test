import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';

test('The header should render his UI elements', () => {
  const component = shallow(
    <Header />
  );
  expect(component.find('h1').text()).toEqual('Header');
  expect(component.find('Search').length).toBe(1);
});
