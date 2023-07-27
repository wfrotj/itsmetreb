import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:2020",
  headers: {
    common: {
      "Content-Type": "multipart/form-data",
    },
  },
});

async function createMessage(message) {
  const response = await apiClient.post("/", message);
  return response.data;
}

export default {
  createMessage,
};
