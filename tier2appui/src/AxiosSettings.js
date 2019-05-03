
import axios from 'axios';
export const axiosCaller = axios.create({
    baseURL: 'https://uktiersponsors.co.uk/tierApi/api'
  });