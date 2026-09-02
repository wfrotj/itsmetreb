import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL || "/api/contact";

async function createMessage(message) {
  const response = await axios.post(baseUrl, message, { timeout: 15000 });
  return response.data;
}

export default {
  createMessage,
};
