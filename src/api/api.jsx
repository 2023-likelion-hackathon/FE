import axios from "axios";
import SERVER from "./url";

export const result = async (result) => {
  try {
    const response = await axios.post(`${SERVER}/translate`);
    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    if (error.status == 404 || error.status == 409) {
      alert(error.message);
    }
  }
};
