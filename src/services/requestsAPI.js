import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63caf675d0ab64be2b5e0d89.mockapi.io/contacts',
});

export const getContactsApi = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const postContactsApi = async contact => {
  const { data } = await instance.post('/', contact);
  return data;
};

export const removeContactsApi = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
