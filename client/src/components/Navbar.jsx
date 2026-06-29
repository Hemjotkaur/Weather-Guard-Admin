import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
        <h1
          onClick={() => navigate("/")}
          className="text-3xl font-bold text-white cursor-pointer tracking-wide"
        >
          WeatherGuard
        </h1>

        <button
          onClick={() => navigate("/login")}
          className="px-6 py-2 rounded-lg border border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;