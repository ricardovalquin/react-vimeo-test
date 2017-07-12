import axios from 'axios';

const vimeoApi = {
  API_BASE_URL: 'https://api.vimeo.com/',
  ACCESS_TOKEN: '95cd2d151738c8581d2615e40752da83',
  PER_PAGE: '12'
};

function searchVideos(query, page) {
  return axios.get(`${vimeoApi.API_BASE_URL}videos/?page=${page}&per_page=${vimeoApi.PER_PAGE}&query=${query}
  &access_token=${vimeoApi.ACCESS_TOKEN}`)
    .then(response => response.data);
}

module.exports = {
  searchVideos
};
