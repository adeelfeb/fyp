import React, { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form className="space-y-4">
          {!isLogin && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 mb-1 text-left"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your name"
              />
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-1 text-left"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-1 text-left"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={toggleMode}
            className="ml-1 font-medium text-indigo-600 hover:underline focus:outline-none"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
