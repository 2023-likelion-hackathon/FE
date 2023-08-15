import axios from "axios";

export const result = async (data) => {
  try {
    const response = await axios.post(
      "http://34.22.74.6:8080/api/translate",
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
    const response = await axios.get("http://34.22.74.6:8080/api/searched");
    return response.data;
  } catch (error) {
    console.error("에러", error);
    throw error;
  }
};

export const deleteData = async () => {
  try {
    const response = await axios.get(
      "http://34.22.74.6:8080/api/clearSearched"
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
