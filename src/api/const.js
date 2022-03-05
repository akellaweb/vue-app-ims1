const API_URL = process.env.NODE_ENV === 'production' ? window.ims_api_url : 'http://localhost:3000/';

export default API_URL;
