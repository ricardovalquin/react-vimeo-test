/* eslint-disable no-unused-vars */
import React from 'react';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
/* eslint-enable no-unused-vars */
import api from '../../utils/api';

class Layout extends React.Component {
  constructor() {
    super();

    this.state = {
      videos: []
    };
  }

  componentDidMount() {
    api.searchVideos('comedy', 1)
      .then((results) => {
        this.setState({ videos: results.data });
      });
  }

  render() {
    return (
      <div className="layout-wp">
        <Header/>
        <Nav/>
        <div className="page-wrapper">
          <Content videos={this.state.videos}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Layout;
