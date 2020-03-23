import axios from 'axios';

const API_KEY = '15651675-34a5d56e7ceea037b075b1fd1';

export default {
  page: 1,
  query: '',
  articlesQuery() {
    return axios.get(
      `https:pixabay.com/api/?q=${this.query}&page=${this.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
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
