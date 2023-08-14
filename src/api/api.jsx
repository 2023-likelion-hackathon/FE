import axios from "axios";
import SERVER from "./url";

export const result = async (result) => {
  try {
    const response = await axios.post(`${SERVER}/translate`, result);
    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    if (error.status == 404 || error.status == 409) {
      alert(error.message);
    }
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
