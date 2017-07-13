/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */
import PropTypes from 'prop-types';

class VideoPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.props.img,
      description: this.props.description
    };
  }

  render() {
    return (
      <div className="videoPreview-wp">
        <figure>
          <img src={this.state.img} alt="Video preview"/>
          <figcaption className="video-description">{this.state.description}</figcaption>
        </figure>
      </div>
    );
  }
}

VideoPreview.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

VideoPreview.defaultProps = {
  img: 'https://i.vimeocdn.com/video/476643220_295x166.jpg?r=pad',
  description: 'some video description'
};

export default VideoPreview;
