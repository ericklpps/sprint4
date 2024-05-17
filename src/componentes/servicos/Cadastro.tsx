import React, { useState } from "react";
import axios from "axios";

interface Usuario {
  name: string;
  lastName: string;
  address: string;
  date: Date;
  email: string;
  password: string;
  tipoDef: string;
  tipoDaltonismo?: string;
}

const Cadastro: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario>({
    name: "",
    lastName: "",
    address: "",
    date: new Date(),
    email: "",
    password: "",
    tipoDef: "",
    tipoDaltonismo: ""
  });
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };

  const handleCadastro = async () => {
    try {
      const response = await axios.post("https://api.exemplo.com/cadastro", usuario);
      console.log("Cadastro bem-sucedido:", response.data);
    } catch (error) {
      setError("Erro ao tentar fazer cadastro");
      console.error("Erro ao tentar fazer cadastro:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <br/>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Cadastro</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Nome
          </label>
          <input type="text" id="name" name="name" value={usuario.name} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded mt-1"/>
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700">
            Sobrenome
          </label>
          <input type="text" id="lastName" name="lastName" value={usuario.lastName} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded mt-1"/>
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700">
            Endereço
          </label>
          <input type="text" id="address" name="address" value={usuario.address} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded mt-1"/>
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700">
            Data de Nascimento
          </label>
          <input type="date" id="date" name="date" value={usuario.date.toISOString().split('T')[0]} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded mt-1"/>
        </div>
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
        <div className="mb-4">
          <label htmlFor="tipoDef" className="block text-gray-700">
            Tipo de Deficiência
          </label>
          <select id="tipoDef" name="tipoDef" value={usuario.tipoDef} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded mt-1">
            <option value="">Selecione...</option>
            <option value="daltonismo">Daltonismo</option>
            <option value="baixaVisao">Baixa Visão</option>
          </select>
        </div>
        {usuario.tipoDef === "daltonismo" && (
          <div className="mb-4">
            <label htmlFor="tipoDaltonismo" className="block text-gray-700">
              Tipo de Daltonismo
            </label>
            <select id="tipoDaltonismo" name="tipoDaltonismo" value={usuario.tipoDaltonismo} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded mt-1">
              <option value="">Selecione...</option>
              <option value="monocromatico">Monocromático</option>
              <option value="dicromatico">Dicromático</option>
              <option value="tricromatico">Tricromático</option>
            </select>
          </div>
        )}
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <button onClick={handleCadastro} className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full">
          Concluir Cadastro
        </button>
      </div>
      <br/>
    </div>
  );
};

export default Cadastro;
