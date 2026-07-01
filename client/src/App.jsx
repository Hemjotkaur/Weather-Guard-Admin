import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import HandleUsers from "./pages/Admin/HandleUsers";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Signin from "./pages/User/Signin";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signin />} />
          <Route
            path="/details"
            element={
              localStorage.getItem("token") ? (
                <HandleUsers />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
