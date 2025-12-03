import React from "react";
import authImage from "../assets/creative-light-bulb.jpg"; // Replace with your image path

const AuthLayout = ({ children, title }) => {
  return (
    <div className="min-h-screen h-full w-full bg-linear-to-br from-indigo-400 to-blue-200 flex items-center justify-center">

      {/* Card Container */}
      <div className="max-w-4xl bg-white shadow-xl rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 ">

        {/* Left Image */}
        <div className="hidden md:flex items-center justify-center">
          <img
            src={authImage}
            alt="auth"
            className="w-full max-w-md max-h-100 rounded-xl shadow-2xl object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="flex flex-col justify-center text-center md:text-left">
          {/* Page Title */}
          {title && (
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">{title}</h2>
          )}

          {/* Children = Login / Register / Forgot forms */}
          <div>{children}</div>
        </div>

      </div>
    </div>
  );
};

export default AuthLayout;