import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Search from './Search';
import sinon from 'sinon';
import api from '../../utils/api';

test('When component did mount it should call the service for all videos', () => {
  sinon.spy(Search.prototype, 'componentDidMount');
  const component = mount(
    <Search />
  );
  expect(Search.prototype.componentDidMount.calledOnce).toBe(true);
});

test('The Search component should render his UI elements', () => {
  const component = shallow(
    <Search />
  );
  expect(component.find('input').length).toBe(1);
  expect(component.find('input').props().placeholder).toBe('Search videos');
});

test('when write on the input the state should change', () => {
  const component = shallow(
    <Search />
  );
  expect(component.find('input').text()).toBe('');
  expect(component.state().query).toBe('');
  component.setState({query: 'comedy'});
  expect(component.state().query).toBe('comedy');
});

test('when write on the input and hits enter it should call the service', () => {
  sinon.spy(api, 'searchVideos');
  const component = shallow(
    <Search />
  );
  component.setState({query: 'comedy'});
  component.find('input').simulate('keyPress', {key: 'Enter'});
  expect(api.searchVideos(component.state().query)).toHaveBeenCalled();
  expect(component.state().query).toBe('');

});

