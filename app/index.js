/* global document */
import ReactDOM from 'react-dom';
/* eslint-disable no-unused-vars */
import React from 'react';
import App from './components/App';
/* eslint-enable no-unused-vars */

require('./index.scss');

const obj = {
  title: 'hello, title',
  message: 'this is a test message'
};

ReactDOM.render(
  <App
    title={obj.title}
    message={obj.message}
  />,
  document.getElementById('app')
);
