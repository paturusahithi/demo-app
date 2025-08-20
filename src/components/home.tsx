export default function Home() {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold">Welcome, {user?.username}</h1>
        <p>Your role: <span className="font-mono">{user?.role}</span></p>
      </div>
    );
  }
  