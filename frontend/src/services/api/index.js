import axios from 'axios';

/**
 * On production environment, this app will call the same server.
 * Both front-end and back-end are builded to run together from the same
 * endpoint.
 */
const api = axios.create({
  baseURL: process.env.REACT_APP_API_HOST || '/',
});


export default api;
