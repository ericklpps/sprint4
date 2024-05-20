import React, { useState } from "react";
import axios from "axios";

interface User {
  name: string;
  lastName: string;
  email: string;
  password: string;
  birthday: string;
  isColorBlind: boolean;
  typeColorBlind?: string;
}

const Cadastro: React.FC = () => {
  const [values, setValues] = useState<User>({
    name: '',
    lastName: '',
    email: '',
    password: '',
    birthday: '',
    isColorBlind: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [cadastroSuccess, setCadastroSuccess] = useState<boolean>(false);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleCadastro = async () => {
    try {
      const response = await axios.post("http://localhost:8080/users", values);
      console.log("Cadastro bem-sucedido:", response.data);
      setCadastroSuccess(true); 
      setTimeout(() => {
        window.location.reload();
      }, 1000);
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
          <input type="text" id="name" name="name" value={values.name} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded mt-1"/>
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700">
            Sobrenome
          </label>
          <input type="text" id="lastName" name="lastName" value={values.lastName} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded mt-1"/>
        </div>
        <div className="mb-4">
          <label htmlFor="birthday" className="block text-gray-700">
            Data de Nascimento (yyyy/mm/dd)
          </label>
          <input type="text" id="birthday" name="birthday" value={values.birthday} onChange={handleInputChange} placeholder="yyyy/mm/dd" className="w-full px-3 py-2 border border-gray-300 rounded mt-1"/>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            E-mail
          </label>
          <input type="email" id="email" name="email" value={values.email} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded mt-1"/>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Senha
          </label>
          <input type="password" id="password" name="password" value={values.password} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded mt-1"/>
        </div>
        <div className="mb-4">
          <label htmlFor="isColorBlind" className="block text-gray-700">
            Tem Daltonismo?
          </label>
          <input type="checkbox" id="isColorBlind" name="isColorBlind" checked={values.isColorBlind} onChange={handleInputChange} className="mt-1"/>
        </div>
        {values.isColorBlind && (
          <div className="mb-4">
            <label htmlFor="typeColorBlind" className="block text-gray-700">
              Tipo de Daltonismo
            </label>
            <select id="typeColorBlind" name="typeColorBlind" value={values.typeColorBlind || ''} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded mt-1">
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
