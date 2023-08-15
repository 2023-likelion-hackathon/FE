import axios from "axios";

const host =
  window.location.hostname === "localhost" ? "http://34.22.74.6:8080" : "/api";

export const apiClient = axios.create({
  baseURL: host,
});
