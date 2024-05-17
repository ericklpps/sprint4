import React, { useState } from "react";
import axios from "axios";

interface Usuario {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario>({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://api.exemplo.com/login", usuario);
      console.log("Login bem-sucedido:", response.data);
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
          <input type="email" id="email" name="email" value={usuario.email} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded mt-1"/>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Senha
          </label>
          <input type="password" id="password" name="password" value={usuario.password} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded mt-1"/>
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <button onClick={handleLogin} className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full">
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Login;
