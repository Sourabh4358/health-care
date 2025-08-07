import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0C67A0]">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <div className="flex justify-between mb-4">
          <button
            className={`w-1/2 p-2 rounded-t-lg text-center text-base font-medium ${
              isLogin ? "bg-[#033452] text-white" : "bg-gray-200"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login Form
          </button>
          <button
            className={`w-1/2 p-2 rounded-t-lg text-center text-base font-medium ${
              !isLogin ? "bg-[#033452] text-white" : "bg-gray-200"
            }`}
            onClick={() => setIsLogin(false)}
          >
            SignUp Form
          </button>
        </div>

        {isLogin ? (
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 mb-3 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="p-2 mb-3 border border-gray-300 rounded"
            />
            <a href="#" className="text-blue-500 text-sm text-right mb-3">
              Forget password?
            </a>
            <button className="p-2 bg-[#033452] text-white rounded hover:bg-[#022f47] transition">
              Login
            </button>
            <p className="text-center mt-4 text-sm">
              Not a member?{" "}
              <a
                href="#"
                onClick={() => setIsLogin(false)}
                className="text-blue-500 hover:underline"
              >
                Signup now
              </a>
            </p>
          </div>
        ) : (
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 mb-3 border border-gray-300 rounded"
            />
            
            <input
              type="password"
              placeholder="Enter your password"
              className="p-2 mb-3 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Enter confirm password"
              className="p-2 mb-3 border border-gray-300 rounded"
            />

            <button  className="p-2 bg-[#033452] text-white rounded hover:bg-[#022f47] transition">SignUp</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
