import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl"
      >
        <h1 className="text-3xl font-bold text-white text-center">
          Admin Login
        </h1>

        <p className="text-gray-300 text-center mt-2 mb-8">
          Login to WeatherGuard Dashboard
        </p>

        <div className="space-y-5">
          <div>
            <label className="block text-gray-200 mb-2">Email</label>

            <input
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-2">Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none focus:border-white"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition cursor-pointer"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;