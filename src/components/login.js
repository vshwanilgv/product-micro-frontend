import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/users/login", { email, password,username });

            // Store tokens in localStorage
            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("idToken", response.data.idToken);

      console.log("Login successful:", response.data);
      alert("Login successful");
    
    } catch (error) {
      console.error("Login failed:", error.response.data);
    }
  };

  return (
    <div className="flex min-h-full flex-1  px-6 py-12 lg:px-8 justify-center">
      <div className="flex w-1/2 flex-col justify-center  border border-white px-20 rounded-lg py-10 bg-gray">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </div>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
          <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                User Name
              </label>
              <div className="mt-2 px-2">
                <input
                  id="username"
                  name="username"
                  value={username}
                  type="username"
                  autoComplete="username"
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  className="px-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  value={email}
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="px-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex justify-center ">
              <button
                type="submit"
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-center"
                onClick={handleSubmit}
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-400">
            Not a member?{' '}
            <Link to="/signup"  className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
              Sign up now
            </Link>
          </p>
        </div>
        </div>
      </div>
  );
};

export default Login;