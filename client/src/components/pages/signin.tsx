import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

import auth from "./firebase.config.js";

const Signin = () => {
  const [email, setEmail] = useState(import.meta.env.VITE_APP_EMAIL);
  const [password, setPassword] = useState(import.meta.env.VITE_APP_PASSWORD);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailPasswordSignin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
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
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        setError("Invalid email or password.");
      } else if (error.code === "auth/invalid-credential") {
        setError("Invalid credentials. Please check your email and password.");
      } else if (error.code === "auth/too-many-requests") {
        setError("Too many sign-in attempts. Please try again later.");
      } else {
        setError("Sign in failed. Please try again later.");
      }
    }
  };

  const handleGoogleSignIn = async () => {
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
      if (error.code === "auth/popup-closed-by-user") {
        setError("Google sign-in popup closed by user.");
      } else if (error.code === "auth/cancelled-popup-request") {
        setError("Google sign-in popup request cancelled.");
      } else {
        setError("Google sign-in failed.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <form onSubmit={handleEmailPasswordSignin}>
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
              Sign In
            </button>
          </div>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="w-full hover:bg-slate-100 flex items-center justify-evenly px-4 py-2 bg-transparent border border-gray-500 text-gray-500 rounded-md focus:outline-none focus:bg-gray-100"
        >
          {" "}
          <FcGoogle size={25} className="-mr-20" />
          <span>Sign In with Google</span>
        </button>
        <p className="mt-5 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="underline text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
