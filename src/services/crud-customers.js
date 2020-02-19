import axios from 'axios';

const apiCustomers = axios.create({
  baseURL: process.env.REACT_APP_URL_CRUD_CUSTOMERS,
});

export default apiCustomers;
