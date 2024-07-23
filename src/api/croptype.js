import axios from 'axios';
import API_BASE_URL from '../config';

const API = axios.create({
  baseURL: `${API_BASE_URL}/`,
});



export const getCropType = async () => {
  try {
    const response = await API.get('crop-types');
    return response.data;
  } catch (error) {
    console.error('Error fetching  croptype:', error);
    throw error;
  }
};