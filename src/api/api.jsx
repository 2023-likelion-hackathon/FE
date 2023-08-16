import axios from "axios";
import https from "https";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const instance = axios.create({
  baseURL: "https://34.64.161.242:8443",
  timeout: 120000,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export const result = async (data) => {
  try {
    const response = await instance.post(
      "https://34.64.161.242:8443/translate",
      data
    );
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;
      if (status === 404 || status === 409) {
        const errorMessage = data.message;
        alert(errorMessage);
      }
    }
    return {};
  }
};

export const getSearchedData = async () => {
  try {
    const response = await instance.get("https://34.64.161.242:8443/searched");
    return response.data;
  } catch (error) {
    console.error("에러", error);
    throw error;
  }
};

export const deleteData = async () => {
  try {
    const response = await instance.get(
      "https://34.64.161.242:8443/clearSearched"
    );
    return response.data;
  } catch (error) {
    const { status, data } = error.response;
    if (status === 409) {
      const errorMessage = data.message;
      alert(errorMessage);
    }
    throw error;
  }
};
