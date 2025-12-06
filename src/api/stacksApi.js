import axios from "axios";

const API_BASE_URL = `${import.meta.env.VITE_API_URL}`;

 const getallStacks = async (token) => {
  const response = await axios.get(`${API_BASE_URL}/stacks`,{
        headers: { Authorization: `Bearer ${token}` }});
  return response.data; // { token, user }
};

 const createStack = async (token,title,desc,slug) => {
  const response = await axios.post(`${API_BASE_URL}/stacks`,{title,desc,slug},{
        headers: { Authorization: `Bearer ${token}` }});
  return response.data;
};

export { getallStacks, createStack };