
import axios from 'axios';

export const axiosCaller = axios.create({
   baseURL: process.env.REACT_APP_BaseUrl,
  });

  export const axiosCallerForAuth = axios.create({
   baseURL: process.env.REACT_APP_BaseAuthUrl, 
    withCredentials:true
  });

  export const axiosCallerForTierDataWithActivity = axios.create({
   baseURL: process.env.REACT_APP_BaseUrl,
   withCredentials:true
  });