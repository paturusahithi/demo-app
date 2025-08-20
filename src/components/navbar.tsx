import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div>
        <Link to="/home" className="mr-4">Home</Link>
        {user?.role === 'ADMIN' && <Link to="/admin" className="mr-4">Admin</Link>}
        {user?.role === 'ADMIN' && <Link to="/register">Create User</Link>}
      </div>
      {user ? (
        <button onClick={logout} className="text-red-300 hover:text-white">Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}
