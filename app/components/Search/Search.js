/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */
import api from '../../utils/api';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      videos: null
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
      api.searchVideos(this.state.query).then((results) => {
        this.setState({ query: '', videos: results });
      }
      );
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

module.exports = Search;
