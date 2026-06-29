import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import HandleUsers from "./pages/Admin/HandleUsers";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<HandleUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
