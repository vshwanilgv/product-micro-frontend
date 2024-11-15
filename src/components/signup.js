import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState("");
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);
  const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3001/api/users/signup", { username, email, password });
      console.log("Sign up successful:", response.data);
    } catch (error) {
      console.error("Sign up failed:", error.response ? error.response.data : error.message);
    }
  };

  const handleEmailConfirmation = async () => {
    alert('Email confirmed successfully');
  };

  return (
    <div className="flex min-h-full flex-1  justify-center px-6 py-12 lg:px-8">
      <div className="flex-col w-1/2 justify-center  border border-white px-20 rounded-lg ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
           Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
          <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                User Name
              </label>
              <div className="mt-2 x-2">
                <input
                  id="username"
                  name="username"
                  value={username}
                  type="username"
                  autoComplete="username"
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 px-2"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email address
              </label>
              <div className="mt-2 x-2">
                <input
                  id="email"
                  name="email"
                  value={email}
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 px-2"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                User Name
              </label>
              <div className="mt-2 x-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  value={username}
                  autoComplete="username"
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 px-2"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div> */}

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
               
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  autoComplete="current-password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black px-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="confirmpassword" className="block text-sm font-medium leading-6 text-white">
                  Confirm Password
                </label>
               
              </div>
              <div className="mt-2">
                <input
                  id="confirmpassword"
                  name="confirmpassword"
                  value={confirmpassword}
                  type="confirmpassword"
                  autoComplete="confirmpassword"
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black px-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  onChange={(e) => setConfirmpassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-center ">
              <button
                type="submit"
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-center"
                onClick={handleSubmit}
              >
                Sign up
              </button>
              
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-400 py-2">
          Already having a account            ?{' '}
          <Link to="/login" className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
            Login now
          </Link>
          </p>

          <p className="mt-10 text-center text-sm text-gray-400 py-2">
          Verify your email           ?{' '}
          <Link to="/confirm" className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
            Verify now
          </Link>
          </p>
        </div>
        </div>
      </div>
  );
};

export default SignUp;