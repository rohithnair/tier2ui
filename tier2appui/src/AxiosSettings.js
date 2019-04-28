
import axios from 'axios';
export const axiosCaller = axios.create({
    baseURL: 'http://uktiersponsors.local/tierApi/api'
  });