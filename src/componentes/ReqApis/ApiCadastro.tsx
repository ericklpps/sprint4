// src/services/apiCadastro.ts
import axios from 'axios';
import { users } from '../ReqApis//interfaces';

const api = axios.create({
  baseURL: 'http://localhost:8080/users',
});

export const registerUser = async (
  name: string,
  lastName: string,
  email: string,
  password: string,
  birthday: string,
  isColorBlind: boolean,
  typeColorBlind?: string
): Promise<users | null> => {
  const userData = {
    name,
    lastName,
    email,
    password,
    birthday,
    isColorBlind,
    typeColorBlind,
  };

  const response = await api.post<users>('/users', userData);
  const newUser = response.data;

  return newUser || null;
};
