import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:5001/api",
  timeout: 10000, // Set a timeout of 10 seconds
});

export default api;
