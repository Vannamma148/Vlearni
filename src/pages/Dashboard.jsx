import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import InterviewQuiz from "../components/InterviewQuiz";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const rolesData = {
  "frontend developer": ["Technical", "Logical Reasoning"],
  "backend developer": ["Technical", "Logical Reasoning"],
  "full stack developer": ["Technical", "Logical Reasoning"],
  "hr": ["Behavioral", "Logical Reasoning"],
  "admin": ["Technical", "Behavioral", "Logical Reasoning"],
   "gk": ["Current Affairs", "Science & Tech", "Indian History", "Geography", "Sports", "Politics & Constitution"]
};

//fetch user roles from auth
const userRoles = ["frontend developer", "backend developer", "full stack developer", "hr", "admin","gk"];

const Dashboard = () => {
  const authToken = localStorage.getItem("authToken");
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);

  if (!authToken) return <Navigate to="/login" />;

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onLogout={handleLogout} />

      {/* Show role selection if not yet selected */}
      {!selectedRole && !quizStarted && (
        <div className="text-center p-8 mx-auto mt-10">
          <h1 className="text-3xl text-sm-2xl font-bold text-gray-800 mb-8">Select Your Category!</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {userRoles.map((role, index) => (
              <div
                key={index}
                className="cursor-pointer p-6 rounded-2xl shadow-lg bg-white text-gray-800 transition transform hover:scale-105"
                onClick={() => setSelectedRole(role)}
              >
                <h2 className="text-2xl font-semibold capitalize">{role}</h2>
                <p className="mt-2 text-gray-500">
                  Access categories for {role}.
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Show categories if role selected but quiz not started */}
      {selectedRole && !quizStarted && (
        <div className="text-center p-8 mx-auto mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 capitalize">
           {selectedRole}!
          </h2>
         <p className="text-md text-gray-600 mb-10">Select a category to start your test.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto " >
            {rolesData[selectedRole].map((cat, index) => (
              <div
                key={index}
                className={`cursor-pointer p-6 rounded-2xl shadow-lg transition transform hover:scale-105 ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-800"
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                <h2 className="text-2xl font-semibold"> {cat}</h2>
                <p className="mt-2 text-gray-400">
                  Test your {cat.toLowerCase()} knowledge!
                </p>
              </div>
            ))}
          </div>

          {selectedCategory && (
            <button
              onClick={() => setQuizStarted(true)}
              className="mt-10 px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Start {selectedCategory} Quiz
            </button>
          )}
        </div>
      )}

      {/* Show quiz */}
      {quizStarted && (
        <div className="py-12 px-4 mt-15">
          <InterviewQuiz category={selectedCategory} role={selectedRole} />
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Dashboard;
