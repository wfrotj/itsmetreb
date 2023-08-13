import axios from "axios";

const baseUrl = "localhost:2020";

async function createMessage(message) {
  const response = await axios.post(baseUrl, message);
  return response.data;
}

export default {
  createMessage,
};
