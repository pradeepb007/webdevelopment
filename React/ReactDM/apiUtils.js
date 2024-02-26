// frontend/src/utils/apiUtils.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  timeout: 10000, // adjust as needed
});

export const performApiRequest = async (url, method = 'GET', data = null) => {
  try {
    const response = await api.request({
      url,
      method,
      data,
    });
    return response.data;
  } catch (error) {
    console.error('Error performing API request:', error);
    throw error;
  }
};
