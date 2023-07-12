import axios from "axios";

let baseURL = "http://localhost:4000";

if (process.env.REACT_APP_NODE_ENV === "production") {
  baseURL = process.env.REACT_APP_BASE_URL;
}

const axiosClient = axios.create({
  baseURL: baseURL,
});

export default axiosClient;
