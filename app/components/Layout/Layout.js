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
      videos: [],
      page: 1
    };

    this.searchVideos = this.searchVideos.bind(this);
  }

  componentDidMount() {
    api.searchVideos('comedy', 1)
      .then((results) => {
        this.setState({ videos: results.data });
      });
  }

  searchVideos(query) {
    this.setState({ videos: [] });
    api.searchVideos(query, 1).then((results) => {
      this.setState({ videos: results.data, page: 1 });
    });
  }

  render() {
    return (
      <div className="layout-wp">
        <Header searchVideos={this.searchVideos}/>
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
