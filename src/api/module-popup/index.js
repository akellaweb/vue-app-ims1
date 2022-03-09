import axios from 'axios';
import { API_URL } from '../const';

export async function sendForm(formData) {
  const endpoint = `${API_URL}` || 'http://localhost:3000/';
  const result = await axios.post(`${endpoint}/ajax/send.php`, {
    data: formData,
  });
  return result.data;
}

export default {
  sendForm,
};
