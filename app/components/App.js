import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable no-unused-vars */
import Spinner from '../utils/Spinner';
/* eslint-enable no-unused-vars */
import vimeoLogo from '../assets/img/vimeo-logo.png';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      message: this.props.message
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.message}</p>
        <img
          src={vimeoLogo}
          alt="vimeo logo"
        />
        <Spinner color="#000" />
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

App.defaultProps = {
  title: 'Say hello to my little friend!',
  message: 'message for my little firend'
};

module.exports = App;
