/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Category from '../Category/Category';
import VideoDetails from '../VideoDetails/VideoDetails';
/* eslint-enable no-unused-vars */
import api from '../../utils/api';

const history = createBrowserHistory();

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      page: 0,
      visiblePage: 3,
      total: 0,
      category: this.props.category,
      categories: []
    };

    this.searchVideos = this.searchVideos.bind(this);
    this.handlePageChanged = this.handlePageChanged.bind(this);
  }

  componentDidMount() {
    history.push(this.props.category);
    api.getCategories()
      .then((results) => {
        this.setState({ categories: results, category: results[0] });
        api.getVideos(this.state.category, 1)
          .then((videosList) => {
            this.setState({ videos: videosList.data, total: videosList.total });
          });
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
        <Router history={history}>
          <div className="container">
            <Switch>
              <Route exact path="/:categoryId" >
                <Category videos={ this.state.videos } pagination={ {
                  total: this.state.total,
                  current: this.state.page,
                  visiblePages: this.state.visiblePage,
                  title: { first: '<|', last: '>|' },
                  onPageChanged: this.handlePageChanged } }
                category={this.state.category}
                />
              </Route>
              <Route path="/video/:videoId">
                <VideoDetails match="/"/>
              </Route>
              <Route render={ () => <p>Not Found</p> }/>
            </Switch>
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}

Layout.propTypes = {
  category: PropTypes.string.isRequired
};

Layout.defaultProps = {
  category: 'animation'
};

export default Layout;
