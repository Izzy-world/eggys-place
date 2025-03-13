import React, { useState } from "react";
import { useForm } from "react-hook-form";
import signupLogo from "../assets/signup-logo.svg";

const AuthModal = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[100101] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#100101] text-white rounded-2xl w-[90%] max-w-lg p-8 relative">
        <button className="absolute top-4 right-6 text-white text-xl" onClick={onClose}>
          ✖
        </button>
        <div className="flex flex-col items-center">
          <img src={signupLogo} alt="signup-logo" className="mb-4 w-12" />
          <h2 className="text-2xl font-bold">{isSignUp ? "Create Account" : "Sign In"}</h2>
          <p className="text-sm text-gray-300 mb-4">
            {isSignUp
              ? "Let’s get you started so you can start joining and creating events"
              : "Welcome back! Please sign in to your account."}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-md bg-gray-800 placeholder-gray-400 border border-gray-600"
                {...register("fullName", { required: "Full Name is required" })}
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
            </div>
          )}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md bg-gray-800 placeholder-gray-400 border border-gray-600"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-md bg-gray-800 placeholder-gray-400 border border-gray-600"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          {isSignUp && (
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 rounded-md bg-gray-800 placeholder-gray-400 border border-gray-600"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) => value === watch("password") || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
            </div>
          )}
          {isSignUp && (
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4"
                {...register("terms", { required: "You must agree to the terms" })}
              />
              <span className="text-sm">
                I agree to the <a href="#" className="underline">terms & conditions</a>
              </span>
            </div>
          )}
          {errors.terms && <p className="text-red-500 text-sm">{errors.terms.message}</p>}

          <button type="submit" className="w-full bg-[#B67B0F] text-white p-3 rounded-md text-lg font-bold cursor-pointer">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p className="text-center mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-yellow-400 font-bold ml-1 cursor-pointer"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;