/* eslint-disable no-unused-vars */
import React from 'react';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Spinner from '../../utils/Spinner';
/* eslint-enable no-unused-vars */

function Layout() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Content/>
      <Footer/>
      <Spinner color="#000" />
    </div>
  );
}

module.exports = Layout;
