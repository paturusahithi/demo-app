import React, { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({ username: '', password: '', role: 'USER' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register user:', formData);
    // API call to /api/users with token
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create User</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange}
          className="w-full p-2 border mb-3 rounded" required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange}
          className="w-full p-2 border mb-3 rounded" required />
        <select name="role" onChange={handleChange}
          className="w-full p-2 border mb-3 rounded">
          <option value="USER">USER</option>
          <option value="ADMIN">ADMIN</option>
        </select>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
}
