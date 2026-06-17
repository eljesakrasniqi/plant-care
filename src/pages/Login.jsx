import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { loginUser } from "../services/auth";
import { Link } from "react-router-dom";
import registerImg from "../assets/registerImg.png";

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
    <>
      <Navbar />

      <main className="min-h-screen flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-10">
          
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold mb-2 text-gray-800">
              Welcome Back
            </h1>

            <p className="text-gray-500 mb-6">
              Sign in to continue managing your plants.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <p className="bg-red-100 text-red-600 p-3 rounded-lg">
                  {error}
                </p>
              )}

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1C9426]"
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1C9426]"
                required
              />

              <button
                type="submit"
                className="w-full bg-[#1C9426] hover:bg-green-700 text-white py-2 rounded-lg transition"
              >
                Log In
              </button>

              <p className="text-center text-gray-600 text-sm">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-[#1C9426] font-semibold hover:underline"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={registerImg}
              alt="Login"
              className="w-full max-w-sm object-contain rounded-lg"
            />
          </div>

        </div>
      </main>
    </>
  );
}

export default Login;