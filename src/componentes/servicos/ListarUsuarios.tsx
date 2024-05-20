// src/ListarUsuarios.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

interface ListarUsuariosProps {
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const ListarUsuarios: React.FC<ListarUsuariosProps> = ({ onEdit, onDelete }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/users")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">LISTAR USUÁRIOS</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Nome</th>
            <th className="py-2">Email</th>
            <th className="py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map(usuario => (
            <tr key={usuario.id}>
              <td className="border px-4 py-2">{usuario.id}</td>
              <td className="border px-4 py-2">{usuario.name}</td>
              <td className="border px-4 py-2">{usuario.email}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => onEdit(usuario)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => onDelete(usuario.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarUsuarios;
