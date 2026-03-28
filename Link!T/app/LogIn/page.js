"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Link from "next/link";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/LogIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "identifier": identifier }),
      });

      const data = await res.json();

      if (!data.success) {
        alert(data.message);
        return;
      }

      // ✅ success → redirect
      router.push(`/${data.result.username}`);

    } 
    catch (error) {
      console.error(error);
      alert("Something went wrong");
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center lg:justify-between lg:pl-[9rem] xl:pl-[14rem] gap-5 sm:gap-[3rem] bg-[#225ac0]">
      <div className="flex items-center min-h-screen bg-[#225ac0]">
        <div className="pt-40 w-full max-w-md bg-white rounded-2xl shadow-md p-8 text-center">
          {/* Logo / Heading */}
          <h1 className="text-3xl font-bold mb-2 text-gray-900">Welcome to LINK!T</h1>
          <p className="text-gray-500 mb-6">Login here!</p>

          {/* Email Or Username Input */}
          <input
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder="Email or username"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Continue Button */}
          <button
            onClick={handleLogin}
            disabled={!identifier || loading}
            className={`w-full py-3 mb-4 rounded-lg font-medium transition ${
              identifier
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {loading ? "Logging in..." : "Continue"}
          </button>

          {/* Terms and Conditions */}
          <p className="text-xs text-gray-500 mb-4">
            By clicking <strong>Create account</strong>, you agree to Linktree’s{" "}
            <a href="#" className="text-green-600 underline">
              privacy notice
            </a>
            ,{" "}
            <a href="#" className="text-green-600 underline">
              T&Cs
            </a>
            , and to receive offers, news and updates.
          </p>

          {/* OR Divider */}
          <div className="flex items-center mb-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google Signup */}
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition mb-3">
            <FcGoogle className="text-xl" />
            <span>Continue with Google</span>
          </button>

          {/* Apple Signup */}
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition mb-3">
            <FaApple className="text-xl" />
            <span>Continue with Apple</span>
          </button>

          {/* Login Link */}
          <p className="text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link href="/SignUp" className="text-purple-600 font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden lg:block h-screen w-[50%] overflow-hidden"><img className="h-full w-full object-cover" src="https://assets.production.linktr.ee/auth/3576/media/banner-login-desktop.f355be949b508c58ec2d.webp" alt="" /></div>
    </div>
  );
};

export default Login;