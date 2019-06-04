import axios from 'axios';

const defURL = axios.create({
  baseURL: 'https://burger-app-440ec.firebaseio.com/'
});

export default defURL;

