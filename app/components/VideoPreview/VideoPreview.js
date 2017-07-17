/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */
import PropTypes from 'prop-types';

class VideoPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.props.img,
      description: this.props.description,
      videoUrl: this.props.videoUrl
    };
    this.viewDetails = this.viewDetails.bind(this);
  }
  viewDetails() {
    this.props.onClickVideo(this.state.videoUrl);
  }

  render() {
    return (
      <div className="videoPreview-wp">
        <figure onClick={this.viewDetails}>
          <img src={this.state.img} alt="Video preview"/>
          <figcaption className="video-description">{this.state.description}</figcaption>
        </figure>
      </div>
    );
  }
}

VideoPreview.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
  onClickVideo: PropTypes.func.isRequired
};

VideoPreview.defaultProps = {
  img: 'https://i.vimeocdn.com/video/476643220_295x166.jpg?r=pad',
  description: 'some video description',
  videoUrl: 'videos/108650530'
};

export default VideoPreview;
