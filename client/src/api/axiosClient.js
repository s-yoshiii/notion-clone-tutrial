import axios from "axios";
const BASE_URL = "http://localtost:5000/api/v1";
const axiosClient = axios.create({
  baseURL: BASE_URL,
});
