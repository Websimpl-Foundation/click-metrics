import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

import auth from "./firebase.config.js";
// Initialize Firebase

const Signup = () => {
  const [email, setEmail] = useState(import.meta.env.VITE_APP_EMAIL);
  const [password, setPassword] = useState(import.meta.env.VITE_APP_PASSWORD);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailPasswordSignup = async (e) => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await result.user.getIdToken();
      const user = result.user;
      localStorage.setItem("token", token);
      localStorage.setItem(
        "user",
        JSON.stringify({ email: user.email, displayName: user.displayName })
      );
      navigate("/");
    } catch (error) {
      console.error(error);
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("Email is already in use. Please use another email.");
          break;
        case "auth/weak-password":
          setError("Password should be at least 6 characters.");
          break;
        default:
          setError("Sign up failed. Please try again later.");
      }
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();
      const user = result.user;
      localStorage.setItem("token", token);
      localStorage.setItem(
        "user",
        JSON.stringify({ email: user.email, displayName: user.displayName })
      );
      navigate("/");
    } catch (error) {
      console.error(error);
      switch (error.code) {
        case "auth/popup-closed-by-user":
          setError("Google sign-up was canceled by the user.");
          break;
        case "auth/popup-blocked":
          setError("Google sign-up was blocked by the browser.");
          break;
        default:
          setError("Google sign-up failed. Please try again later.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <form onSubmit={handleEmailPasswordSignup}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full px-4 py-2 hover:bg-transparent border-2 border-black hover:text-black transition-all bg-neutral-800 text-white rounded-md"
            >
              Sign Up
            </button>
          </div>
        </form>
        <button
          onClick={handleGoogleSignup}
          className="w-full hover:bg-slate-100 flex items-center justify-evenly px-4 py-2 bg-transparent border border-gray-500 text-gray-500 rounded-md focus:outline-none focus:bg-gray-100"
        >
          <FcGoogle size={25} className="-mr-20" />

          <span>Sign Up with Google</span>
        </button>
        <p className="mt-5 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="underline text-blue-500">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
