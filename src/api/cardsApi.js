import axios from "axios";

const API_BASE_URL = `${import.meta.env.VITE_API_URL}`;

 const getallCards = async (token,stackId) => {
  const response = await axios.get(`${API_BASE_URL}/stacks/${stackId}/cards`,{
        headers: { Authorization: `Bearer ${token}` }});
  return response.data; // { token, user }
};

 const createCard = async (token,stackId,{ title, desc, thumb_url, canonical_url, domain }) => {
  const response = await axios.post(`${API_BASE_URL}/stack/${stackId}/cards`,{token,title,desc,thumb_url,canonical_url,domain},{
        headers: { Authorization: `Bearer ${token}` }});
  return response.data;
};

export { getallCards, createCard };