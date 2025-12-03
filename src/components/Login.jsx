
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Dummy login validation (email: user@learn.com, password: learn)
    setTimeout(() => {
      if (form.email === "user@learn.com" && form.password === "learn") {
        // Store a dummy token in localStorage
        localStorage.setItem("authToken", "dummyToken123");
        navigate("/dashboard");
      } else {
        setError("Invalid credentials, please try again.");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <AuthLayout title="Welcome to Vlearni!">
      <motion.form
        className="space-y-6"
        onSubmit={handleLogin}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }} >
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Email */}
        <div>
          {/* <label className="block text-gray-700 font-medium mb-1">Email</label> */}
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password */}
        <div>
          {/* <label className="block text-gray-700 font-medium mb-1">Password</label> */}
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Links */}
       
        <div className="text-md text-gray-800 text-center mt-3">
          Don't have an account?  

           <Link to="/register" className="text-blue-600 hover:underline"> Create Account</Link>
        </div>
         <div className="text-center">
          <Link to="/forgot" className="text-blue-500 underline">Forgot Password?</Link>

</div>
      </motion.form>
    </AuthLayout>
  );
};

export default Login;
