import React, { useState } from "react";
import { loginUser } from "../ReqApis/ApiLogin"; // Importando a função de login

interface User {
  email: string;
  password: string;
}

// Ajuste a interface UserData para refletir o tipo de id retornado pela API
interface UserData {
  id: string; // Alterado de number para string, assumindo que a API retorna um id como string
  name: string;
  email: string;
  // Adicione outras propriedades conforme necessário
}

const Login: React.FC = () => {
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loginSuccess, setLoginSuccess] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
    ...prevUser,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const foundUserData: UserData | null = await loginUser(user.email, user.password);

      if (foundUserData) {
        console.log("Login bem-sucedido:", foundUserData);
        setUserData(foundUserData);
        setLoginSuccess(true);
      } else {
        setError("E-mail ou senha incorretos");
      }
    } catch (error) {
      setError("Erro ao tentar fazer login");
      console.error("Erro ao tentar fazer login:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {loginSuccess? (
        <div>
          <p>Bem-vindo, {userData?.name}!</p>
        </div>
      ) : (
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full"
          >
            Entrar
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
