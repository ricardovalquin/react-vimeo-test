import axios from 'axios';

const vimeoApi = {
  API_BASE_URL: 'https://api.vimeo.com/',
  ACCESS_TOKEN: '95cd2d151738c8581d2615e40752da83',
  PER_PAGE: '12'
};

function formatCategories(categories) {
  if (categories) {
    return categories.data.data.map((category) => {
      const uri = category.uri.split('/');
      return uri[2];
    });
  }

  return categories;
}

function getVideos(category, page) {
  return axios.get(`${vimeoApi.API_BASE_URL}categories/${category}/videos?
  page=${page}&per_page=${vimeoApi.PER_PAGE}&access_token=${vimeoApi.ACCESS_TOKEN}`)
    .then(response => response.data);
}

function searchVideos(query, page) {
  return axios.get(`${vimeoApi.API_BASE_URL}videos/?page=${page}&per_page=${vimeoApi.PER_PAGE}&query=${query}
  &access_token=${vimeoApi.ACCESS_TOKEN}`)
    .then(response => response.data);
}

function getVideo(category, video) {
  if (category && video) {
    return axios.get(`${vimeoApi.API_BASE_URL}categories/${category}/videos/${video}
    ?access_token=${vimeoApi.ACCESS_TOKEN}`)
      .then(response => response.data);
  } else if (!category && video) {
    return axios.get(`${vimeoApi.API_BASE_URL}videos/${video}
    ?access_token=${vimeoApi.ACCESS_TOKEN}`)
      .then(response => response.data);
  }
  return null;
}

function getCategories() {
  return axios.get(`${vimeoApi.API_BASE_URL}categories?access_token=${vimeoApi.ACCESS_TOKEN}`)
    .then(categories => formatCategories(categories));
}

function getVideoDetails(videoUrl) {
  return axios.get(`${vimeoApi.API_BASE_URL}${videoUrl}?access_token=${vimeoApi.ACCESS_TOKEN}`)
    .then(response => response.data);
}

module.exports = {
  searchVideos,
  getVideos,
  getVideo,
  getCategories,
  getVideoDetails
};
