/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */
import PropTypes from 'prop-types';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    this.setState({ query: '' });
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ query: value });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.onSearch(this.state.query);
      this.setState({ query: '' });
    }
  }

  render() {
    return (
      <div className="search-wp">
        <input
          type="text"
          className="search-field"
          placeholder="Search videos"
          autoComplete="off"
          value={this.state.query}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Search;
