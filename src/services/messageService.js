import axios from "axios";

const REACT_URL = import.meta.env.VITE_URL;

const baseUrl = REACT_URL;

async function createMessage(message) {
  const response = await axios.post(baseUrl, message);
  return response.data;
}

export default {
  createMessage,
};
