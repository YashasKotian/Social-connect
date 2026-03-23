import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-amber-50 to-amber-100">

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <fieldset className="space-y-4">
          <legend className="text-2xl font-semibold text-center text-green-950 mb-6">Login</legend>

          <div>
            <label className="block text-sm font-medium text-black">Email</label>
            <input
              type="email"
              className="input input-bordered w-full py-3 px-4 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black">Password</label>
            <input
              type="password"
              className="input input-bordered w-full py-3 px-4 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Password"
            />
          </div>

          <button className="btn btn-primary w-full py-3 mt-6 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
            Login
          </button>
        </fieldset>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 font-semibold hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}