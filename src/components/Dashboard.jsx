// src/components/MusicDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <div className="text-center max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Your Music Dashboard</h1>
        <p className="text-lg mb-6 text-gray-700">
          Discover new tunes, manage your playlists, and explore your favorite artists.
        </p>
        <div className="space-y-4 space-x-4">
          <Link to="/my-playlists">
            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition duration-300">
              My Playlists
            </button>
          </Link>
          <Link to="/top-charts">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300">
              Top Charts
            </button>
          </Link>
          <Link to="/new-releases">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition duration-300">
              New Releases
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
