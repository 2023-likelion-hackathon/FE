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
    if (error.status == 404 || error.status == 409) {
      alert(error.message);
    }
  }
};
