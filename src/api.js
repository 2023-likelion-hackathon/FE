import axios from "axios";

// const BASE_URL = "http://34.22.74.6:8080";

// CORS 규정때문에 API가 안되서 구글 찾아보고 proxy 수정.

export const getSearchedData = async () => {
  try {
    const response = await axios.get(`/searched`);
    return response.data;
  } catch (error) {
    console.error("에러", error);
    throw error;
  }
};
