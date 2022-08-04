import axios from "axios";

axios.defaults.baseURL = "/api";

export const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
