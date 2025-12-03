import React, { useState } from "react";
import { LogOut, Menu, X, UserCircle } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  return (
    <nav className="w-full bg-white/70 backdrop-blur-lg shadow-md fixed top-0 left-0 z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-3xl font-extrabold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent select-none">
          Vlearni
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="px-4 py-2  bg-linear-to-r from-orange-600 to-red-700 text-white font-semibold rounded-lg shadow hover:bg-red-600 active:scale-95 transition flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4 space-y-4 border-t">

        

          <button
            onClick={handleLogout}
            className="w-full px-4 py-3  bg-linear-to-r from-orange-600 to-red-700 text-white font-semibold rounded-lg hover:bg-red-600 transition flex items-center justify-center gap-2 active:scale-95"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
