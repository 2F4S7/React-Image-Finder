import axios from 'axios';

const KEY = '21185221-d49bba1554bfecf624305df2b';

const fetchImage = ({ searchQuery = '', currentPage = 1, pageSize = 15 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${pageSize}`,
    )
    .then(response => response.data.hits);
};

export default fetchImage;
