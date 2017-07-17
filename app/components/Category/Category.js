/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Pager from 'react-pager';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Content from '../Content/Content';
import VideoDetails from '../VideoDetails/VideoDetails';
/* eslint-enable no-unused-vars */
import api from '../../utils/api';

const history = createBrowserHistory();

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category,
      videos: this.props.videos,
      videoDetailUri: null,
      videoDetailObj: {}
    };
    this.viewDetails = this.viewDetails.bind(this);
  }
  viewDetails(videoUrl) {
    api.getVideoDetails(videoUrl)
      .then((videoObj) => {
        this.setState({ videoDetailUri: videoObj.uri.split('/')[2], videoDetailObj: videoObj });
        history.push(`${this.state.category}/video/${this.state.videoDetailUri}`);
        return videoObj.uri;
      });
  }
  render() {
    return (
      <div className="page-wrapper">
        <Router history={history}>
          <div className="container">
            <Switch>
              <Route exact path="/:categoryId" >
                <div>
                  <Content videos={this.props.videos} viewDetails={this.viewDetails}/>
                  <div className="pagger-wp">
                    <Pager
                      total={this.props.pagination.total}
                      current={this.props.pagination.current}
                      visiblePages={this.props.pagination.visiblePages}
                      titles={this.props.pagination.titles}
                      className="pagination-sm pull-right"
                      onPageChanged={this.props.pagination.onPageChanged}
                    />
                  </div>
                </div>
              </Route>
              <Route path="/:categoryId/video/:videoId">
                <VideoDetails video={ this.state.videoDetailObj }/>
              </Route>
              <Route render={ () => <p>Not Found</p> }/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

Category.propTypes = {
  category: PropTypes.string.isRequired,
  videos: PropTypes.array.isRequired,
  pagination: PropTypes.object.isRequired
};

Category.defaultProps = {
  category: 'animation',
  videos: [],
  pagination: {}
};

export default Category;
