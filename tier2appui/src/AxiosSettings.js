
import axios from 'axios';
export const axiosCaller = axios.create({
    baseURL: 'http://192.168.0.4/api'
  });