import axios from 'axios';
import API_URL from '../const';

export async function sendForm(formData) {
  const result = await axios.post(API_URL, {
    data: formData,
  });
  return result.data;
}

export default {
  sendForm,
}
