import axios from 'axios';
import { API_URL } from '../const';

const method = process.env.NODE_ENV === 'production' ? 'news-list.php' : 'BENEFIT';
export async function fetchDBBenefits() {
  const endpoint = API_URL || 'http://localhost:3000/';
  const result = await axios.get(endpoint + method, {
    params: {
      IBLOCK_ID: 131,
      PROPS: ['ICON'],
    },
  });
  return result.data;
}

export default {
  fetchDBBenefits,
};
