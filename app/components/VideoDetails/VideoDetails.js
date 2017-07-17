/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */
import PropTypes from 'prop-types';


class VideoDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: props.video
    };
  }
  render() {
    return (
      <div className="video-details-wp">
        <div className="video-wp">
          <div className="video"></div>
          <div className="video-statistics">
            <label>{ this.state.video.stats.plays }</label>
            <label>{ this.state.video.metadata.connections.likes.total }</label>
            <label>{ this.state.video.metadata.connections.pictures.total }</label>
            <label>{ this.state.video.metadata.connections.comments.total }</label>
          </div>
        </div>
        <div className="video-data">
          <div className="data-header">

          </div>
          <div className="video-description">{this.state.video.description}</div>
        </div>
      </div>
    );
  }
}

VideoDetails.propTypes = {
  video: PropTypes.object.isRequired
};

VideoDetails.defaultProps = {
  video: {}
};

export default VideoDetails;
