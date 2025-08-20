import { useState } from 'react';

export default function AdminDashboard() {
  const [users, setUsers] = useState([
    { id: 1, username: 'john', role: 'USER' },
    { id: 2, username: 'admin', role: 'ADMIN' }
  ]);

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter(user => user.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <table className="min-w-full bg-white shadow-md rounded">
        <thead>
          <tr>
            <th className="text-left p-3">Username</th>
            <th className="text-left p-3">Role</th>
            <th className="text-left p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id} className="border-t">
              <td className="p-3">{u.username}</td>
              <td className="p-3">{u.role}</td>
              <td className="p-3">
                <button onClick={() => handleDelete(u.id)} className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
