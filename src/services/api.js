import axios from 'axios';

const api = axios.create({
  baseURL: "https://api.github.com"
});

const userDetails = axios.create({
  baseURL: "https://api.github.com/users"
})

export { api, userDetails };