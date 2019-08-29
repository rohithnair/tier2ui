
import axios from 'axios';
export const axiosCaller = axios.create({
    baseURL: 'https://uktiersponsors.co.uk/tierapi/api'
  });
  
  // Add a request interceptor
  axiosCaller.interceptors.request.use(function (config) {
  // Do something before request is sent
   document.body.classList.add('custom-loader');
   return config;
}, function (error) {
  document.body.classList.remove('custom-loader');
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosCaller.interceptors.response.use(function (response) {
  // Do something with response data
     document.body.classList.remove('custom-loader');
     return response;
}, function (error) {
  document.body.classList.remove('custom-loader');
  // Do something with response error
  return Promise.reject(error);
}); 