import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '15651675-34a5d56e7ceea037b075b1fd1';
const Request_Type = 'image_type=photo&orientation=horizontal&per_page=12';

export default {
  page: 1,
  query: '',
  articlesQuery() {
    return axios.get(
      BASE_URL +
        '?q=' +
        this.query +
        '&page=' +
        this.page +
        '&key=' +
        API_KEY +
        Request_Type,
    );
  },

  get searchQuery() {
    return this.query;
  },

  set searchQuery(string) {
    this.query = string;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
};
