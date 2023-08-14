import axios from "axios";
import SERVER from "./url";

export const result = async (result) => {
  try {
    const response = await axios.post(`${SERVER}/translate`, result);
    if (response.status == 200) {
      alert("성공");
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;
      if (status === 404 || status === 409) {
        const errorMessage = data.message;
        alert(errorMessage);
      }
    }
    return null;
  }
};

export const getSearchedData = async () => {
  try {
    const response = await axios.get(`${SERVER}/searched`);
    return response.data;
  } catch (error) {
    console.error("에러", error);
    throw error;
  }
};

export const deleteData = async () => {
  try {
    const response = await axios.get(`${SERVER}/clearSearched`);
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
