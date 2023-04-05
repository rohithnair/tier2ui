
import axios from 'axios';
export const baseURL = 'https://uktiersponsors.co.uk/tierApi/api';
export const baseAuthURL = 'https://uktiersponsors.co.uk/tierApi/auth/func';
export const axiosCaller = axios.create({
   baseURL: baseURL,
  });

  export const axiosCallerForAuth = axios.create({
   baseURL: baseAuthURL, 
    withCredentials:true
  });

  export const axiosCallerForTierDataWithActivity = axios.create({
   baseURL: baseURL,
   withCredentials:true
  });