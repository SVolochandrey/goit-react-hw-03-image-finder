import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
key: '34209342-c41c4463c17817b23954ca079',
image_type: 'photo',
orientation: 'horizontal',
per_page: 12,
};

const fetchImages = async(query, page) => {
const {data} = await axios.get(`?q=${query}&page=${page}`);
return data;
};

export default fetchImages;