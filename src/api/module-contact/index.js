import axios from 'axios';
import { API_URL } from '../const';

const method = process.env.NODE_ENV === 'production' ? 'news-list.php' : 'CONTACT';

export async function fetchDBContact() {
  const endpoint = API_URL || 'http://localhost:3000/';
  const result = await axios.get(endpoint + method, {
    params: {
      IBLOCK_ID: 136,
      PROPS: ['ICON'],
    },
  });
  return result.data;
}

export default {
  fetchDBCatalog: fetchDBContact,
};
