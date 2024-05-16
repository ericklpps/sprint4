import React from 'react';

// Se digitar uma URL inexistente, retorna este componente
const NaoEncontrado: React.FC = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">PÁGINA NÃO ENCONTRADA</h1>
      <p className="text-xl">Caso persista, entre em contato com o suporte</p>
    </div>
  );
};

export default NaoEncontrado;

