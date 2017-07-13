/* eslint-disable no-unused-vars */
import React from 'react';
import Pager from 'react-pager';
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
      page: 0,
      visiblePage: 3,
      total: 0,
      category: 'animation'
    };

    this.searchVideos = this.searchVideos.bind(this);
    this.handlePageChanged = this.handlePageChanged.bind(this);
  }

  componentDidMount() {
    api.searchVideos(this.state.category, 1)
      .then((results) => {
        this.setState({ videos: results.data, total: results.total });
      });
  }

  searchVideos(query) {
    this.setState({ videos: [], category: query });
    api.searchVideos(query, 1).then((results) => {
      this.setState({ videos: results.data, page: results.page, total: results.total });
    });
  }

  handlePageChanged(newPage) {
    this.setState({ videos: [] });
    api.searchVideos(this.state.category, newPage + 1).then((results) => {
      this.setState({ videos: results.data, page: results.page - 1, total: results.total });
    });
  }

  render() {
    return (
      <div className="layout-wp">
        <Header searchVideos={this.searchVideos}/>
        <Nav/>
        <Category videos={ this.state.videos }
            pagination={{ total: this.state.total,
            current: this.state.page,
            visiblePages: this.state.visiblePage,
            title: { first: '<|', last: '>|' },
            onPageChanged: this.handlePageChanged }}
        />
        <Footer/>
      </div>
    );
  }
}

export default Layout;
