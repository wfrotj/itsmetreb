import axios from "axios";

const baseUrl = import.meta.env.VITE_URL;

async function createMessage(message) {
  const response = await axios.post(baseUrl, message, { timeout: 10000 });
  return response.data;
}

export default {
  createMessage,
};
