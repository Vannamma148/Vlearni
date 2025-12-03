import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Dummy registration logic: Validate and "save" user in localStorage
    setTimeout(() => {
      if (form.name && form.email && form.password) {
        // Simulate storing user details
        localStorage.setItem("user", JSON.stringify(form));
        localStorage.setItem("authToken", "dummyToken123"); // Automatically log the user in
        navigate("/dashboard"); // Redirect to the dashboard
      } else {
        setError("Please fill out all fields.");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <AuthLayout title="Create Your Account ✨">
      <motion.form className="space-y-6"  onSubmit={handleRegister}  initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Full Name */}
        <div>
          {/* <label className="block text-gray-700 font-medium mb-1">Full Name</label> */}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="Enter your full name"
            required
          />
        </div>

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
            placeholder="Create a password"
            required
          />
        </div>

        {/* Register Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-linear-to-r from-indigo-600 to-blue-600 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition"
        >
          {loading ? "Creating Account..." : "Register"}
        </button>

        {/* Links */}
        <div className="text-md text-gray-800 text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </div>
      </motion.form>
    </AuthLayout>
  );
};

export default Register;
