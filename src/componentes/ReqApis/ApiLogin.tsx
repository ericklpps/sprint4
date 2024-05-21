import axios from 'axios';
import { users } from '../ReqApis/interfaces';

const api = axios.create({
  baseURL: 'http://localhost:8080/users',
});

export const loginUser = async (email: string, password: string): Promise<users | null> => {
  try {
    const response = await api.get<users>(`?q={"email":"${encodeURIComponent(email)}","password":"${encodeURIComponent(password)}"}`);

    return response.data || null;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return null;
  }
};
