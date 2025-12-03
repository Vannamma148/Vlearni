import React, { useState } from "react";
import  { Link }  from "react-router-dom";
import AuthLayout from "./AuthLayout"
import { motion } from "framer-motion";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    setMessage("");

    // Dummy password reset logic
    setTimeout(() => {
      if (email) {
        setMessage("A reset link has been sent to your email!");
      } else {
        setMessage("Please enter a valid email.");
      }
    }, 1500);
  };

  return (
    <AuthLayout title="Reset Your Password 🔐">
      <motion.form className="space-y-6" onSubmit={handleReset}  initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        {message && <p className="text-center text-gray-600">{message}</p>}

        {/* Email */}
        <div>
          {/* <label className="block text-gray-700 font-medium mb-1">Email</label> */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="Enter your registered email"
            required
          />
        </div>

        {/* Reset Button */}
        <button
          type="submit"
          className="w-full py-3 bg-linear-to-r from-indigo-600 to-blue-600 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition"
        >
          Reset Password
        </button>

        <div className="text-md text-gray-800 text-center mt-3">
          <Link to="/login" className="text-blue-600 hover:underline">Back to Login</Link>
        </div>
      </motion.form>
    </AuthLayout>
  );
};

export default ForgotPassword;
