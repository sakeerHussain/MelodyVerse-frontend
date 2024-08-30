import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4">Welcome to MelodyVerse</h1>
        <p className="text-lg mb-6">
          Your ultimate destination for discovering and enjoying music. Dive in
          and let the music take over!
        </p>
        <p className="text-xl italic mb-6">
          "Where words fail, music speaks." - Hans Christian Andersen
        </p>

        <div className="space-x-4">
          <Link to="/signup">
            <button className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-lg transition duration-300">
              Get Started
            </button>
          </Link>

          <Link to="/login">
            <button className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-lg transition duration-300">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
