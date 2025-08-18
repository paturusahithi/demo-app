import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Fake auth logic (replace with real API call)
    const role = username === 'admin' ? 'ADMIN' : 'USER';
    localStorage.setItem('user', JSON.stringify({ username, role, token: 'fake-jwt' }));
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl mb-4 font-semibold">Login</h2>
        <input type="text" placeholder="Username" value={username}
          onChange={(e) => setUsername(e.target.value)} className="mb-3 w-full px-3 py-2 border rounded" required />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} className="mb-4 w-full px-3 py-2 border rounded" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Login</button>
      </form>
    </div>
  );
}
