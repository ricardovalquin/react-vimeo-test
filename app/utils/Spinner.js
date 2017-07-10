/* eslint-disable no-unused-vars */
import React from 'react';
import Loader from 'halogen/PulseLoader';
import PropTypes from 'prop-types';
/* eslint-enable no-unused-vars */

function Spinner(props) {
  return (
    <div>
      <Loader color={props.color} size={props.renderSize} margin={props.margin}/>
    </div>
  );
}

Spinner.propTypes = {
  color: PropTypes.string.isRequired,
  renderSize: PropTypes.string.isRequired,
  margin: PropTypes.string.isRequired
};

Spinner.defaultProps = {
  color: '#26A65B',
  renderSize: '16px',
  margin: '4px'
};

module.exports = Spinner;
