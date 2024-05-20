// src/services/ApiLogin.tsx
import axios from 'axios';
import { users } from '../ReqApis/interfaces';

const api = axios.create({
  baseURL: 'http://localhost:3001/users',
});

export const loginUser = async (email: string, password: string): Promise<users | null> => {
  try {
    // Busca o usuário pelo email
    const response = await api.get<users[]>(`?q={"email":"${encodeURIComponent(email)}","password":"${encodeURIComponent(password)}"}`);

    // Encontra o usuário com o email correspondente e verifica se a senha corresponde
    const user = response.data.find(user => user.email === email && user.password === password);

    // Retorna o usuário encontrado ou null se não encontrado
    return user || null;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return null;
  }
};
