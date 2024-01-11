import axios from 'axios';
const baseUrl = 'api/login';


//login only for admin
export const adminLogin = async password => {
  const response = await axios.post(`${baseUrl}/admin`, password);
  return response.data;
};
