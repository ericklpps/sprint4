// src/ExcluirUsuario.tsx
import React from 'react';
import axios from 'axios';

interface ExcluirUsuarioProps {
  userId: number;
  refreshUsers: () => void;
}

const ExcluirUsuario: React.FC<ExcluirUsuarioProps> = ({ userId, refreshUsers }) => {
  const handleDelete = () => {
    axios.delete(`http://localhost:8080/users/${userId}`)
      .then(() => {
        alert('Usuário excluído com sucesso!');
        refreshUsers();
      })
      .catch(error => console.error('Erro ao excluir usuário:', error));
  };

  return (
    <button
      onClick={handleDelete}
      className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
    >
      Excluir
    </button>
  );
};

export default ExcluirUsuario;
