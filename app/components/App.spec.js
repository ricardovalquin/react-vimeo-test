import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import vimeoLogo from '../assets/img/vimeo-logo.png';

test('the app container should have an h1 title tag', () => {
  // Render a checkbox with label in the document
  const component = shallow(
    <App title="title test" message="this is the message" />
  );

  expect(component.find('h1').text()).toEqual('title test');

});
