import React from 'react';
import PropTypes from 'prop-types';
import vimeoLogo from '../assets/img/vimeo-logo.png';

class App extends React.Component {
  render() {
    this.message = 'Say hello to my little friend!';
    return (
      <div>
        <h1>{this.message}</h1>
        <img
          src={vimeoLogo}
          alt="vimeo logo"
        />
      </div>

    );
  }
}

App.propTypes = {
  text: PropTypes.string.isRequired
};

App.defaultProps = {
  text: 'Say hello to my little friend!'
};

module.exports = App;
