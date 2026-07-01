import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log("token", token);
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
        <h1
          onClick={() => navigate("/")}
          className="text-3xl font-bold text-white cursor-pointer tracking-wide"
        >
          WeatherGuard
        </h1>
        {!token ? (
          <div>
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-2 rounded-lg border border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="px-6 py-2 ml-5 rounded-lg border border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              Signup
            </button>
          </div>
        ) : (
          <button className="flex items-center gap-2 bg-white text-slate-800 px-5 py-2.5 rounded-lg font-medium shadow-sm hover:bg-slate-100 transition cursor-pointer">
            <FaRegUserCircle className="text-xl" />
            Profile
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
