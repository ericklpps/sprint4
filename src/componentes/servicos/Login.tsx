import React, { useState } from "react";
import { loginUser } from "../ReqApis/ApiLogin"; // Importando a função de login
import { users } from "../ReqApis/interfaces";

const Login: React.FC = () => {
  const [user, setUser] = useState<users>({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loginSuccess, setLoginSuccess] = useState<boolean>(false); // Estado para controlar se o login foi feito com sucesso

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const foundUser = await loginUser(user.email, user.password); // Chama a função de login

      if (foundUser) {
        console.log("Login bem-sucedido:", foundUser);
        setLoginSuccess(true); // Define o estado de login bem-sucedido como verdadeiro
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
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            E-mail
          </label>
          <input type="email" id="email" name="email" value={user.email} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded mt-1"/>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Senha
          </label>
          <input type="password" id="password" name="password" value={user.password} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded mt-1"/>
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {loginSuccess && <div className="text-green-500 mb-4">Login feito com sucesso!</div>}
        <button onClick={handleLogin} className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full">
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Login;
