import axios from "axios";

const api = axios.create({
  baseURL: "https://alpha-api.goadopt.io/api",
});

export default api;
