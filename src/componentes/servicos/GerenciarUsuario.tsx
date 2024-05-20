// src/GerenciarUsuarios.tsx
import React, { useState, useEffect } from "react";
import ListarUsuarios from "./ListarUsuarios";
import UserUpdate from "./UserUpdate";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

const GerenciarUsuarios: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const fetchUsers = () => {
    axios.get("http://localhost:8080/users")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEdit = (user: User) => {
    setEditingUser(user);
  };

  const handleDelete = (id: number) => {
    axios.delete(`http://localhost:8080/users/${id}`)
      .then(() => {
        alert('Usuário excluído com sucesso!');
        fetchUsers();
      })
      .catch(error => console.error('Erro ao excluir usuário:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GERENCIAR USUÁRIOS</h1>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <ListarUsuarios onEdit={handleEdit} onDelete={handleDelete} />
        </div>
        <div>
          {editingUser && (
            <UserUpdate
              user={editingUser}
              setEditingUser={setEditingUser}
              refreshUsers={fetchUsers}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GerenciarUsuarios;
