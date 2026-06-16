import React, { useState } from "react";
import { loginUser } from "../services/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    loginUser(email, password)
      .then(() => {
        window.location.href = "/";
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <main className="py-12 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl text-center mb-4">Sign In</h1>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl shadow-2xl border border-gray-200 p-5 space-y-4"
        >
          {error && (
            <p className="bg-red-100 text-red-600 p-2 rounded-lg">
              {error}
            </p>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
          >
            Log In
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;