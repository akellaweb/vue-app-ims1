import axios from 'axios';
import API_URL from '../const';

const method = process.env.NODE_ENV === 'production' ? 'news-list.php' : 'BENEFIT';

export async function fetchDBBenefits() {
  const result = await axios.get(API_URL + method, {
    data: {
      IBLOCK_ID: 131,
    },
  });
  return result.data;
}

export default {
  fetchDBBenefits,
};
