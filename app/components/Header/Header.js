/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Search/Search';
/* eslint-enable no-unused-vars */

function Header(props) {
  return (
    <div className="header-wp">
      <Search onSearch={props.searchVideos}/>
    </div>
  );
}

Header.propTypes = {
  searchVideos: PropTypes.func.isRequired
};

export default Header;
