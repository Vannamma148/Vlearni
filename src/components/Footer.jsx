import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white/70 backdrop-blur-lg border-t border-gray-200 py-6 mt-16 fixed bottom-0">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left Section */}
        <p className="text-gray-700 text-sm">
          © {new Date().getFullYear()} <span className="font-semibold">Vlearni</span>.  
          All Rights Reserved.
        </p>

        {/* Middle */}
        {/* <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Terms & Conditions
          </a>
        </div> */}

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a href="https://github.com/Vannamma148" target="_blank" className="text-gray-700 hover:text-black transition">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/vannamma-dev/" target="_blank" className="text-gray-700 hover:text-blue-600 transition">
            <Linkedin size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
