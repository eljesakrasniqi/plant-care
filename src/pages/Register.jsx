import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { registerUser } from '../services/auth';
import registerImg from '../assets/registerImg.png'

function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName.length < 3) {
      setError("Full name must be at least 3 characters");
      return;
    }
    if (password.length < 6) {
      setError("Password must contain at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!fullName && !email && !password) {
      setError("please fill all fields");
      return
    }
    registerUser({ fullName, email, password }).then((result) => {
      console.log(result);
      navigate("/login")
    })
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Join PlantCare</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <p className="text-red-600 text-sm">{error}</p>
              )}
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1C9426]"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1C9426]"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1C9426]"
              />
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="Confirm Password"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1C9426]"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1C9426] text-white py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
              >
                {loading ? "Registering..." : "Register"}
              </button>
              
              <p className="text-center text-gray-600 text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-[#1C9426] font-semibold hover:underline"
                >
                  Log in
                </Link>
              </p>
            </form>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={registerImg} alt="register" className="w-full max-w-sm object-contain rounded-lg"
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Register