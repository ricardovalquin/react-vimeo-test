import PropTypes from 'prop-types';
/* eslint-disable no-unused-vars */
import React from 'react';
import VideoPreview from '../VideoPreview/VideoPreview';
import Spinner from '../../utils/Spinner';
/* eslint-enable no-unused-vars */

function Content(props) {
  return (
    <div>
      {props.videos.length > 0 ?
        props.videos.map(
          video =>
            <VideoPreview
              key={video.name}
              img={video.pictures.sizes[2].link}
              description={video.name}
            />
        )
        : <Spinner color="#000"/>
      }
    </div>
  );
}

Content.propTypes = {
  videos: PropTypes.array.isRequired
};

Content.defaultProps = {
  videos: []
};

export default Content;
