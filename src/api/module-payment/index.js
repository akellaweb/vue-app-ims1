import axios from 'axios';
import API_URL from '../const';

const method = process.env.NODE_ENV === 'production' ? 'news-list.php' : 'PAYMENT';

export async function fetchDBPayment() {
  const result = await axios.get(API_URL + method);
  return result.data;
}

export default {
  fetchDBPayment,
};