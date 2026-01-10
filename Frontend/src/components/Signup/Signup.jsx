import React from "react";
import {NavLink} from 'react-router-dom'

const SignIn = () => {
  return (
    <div className=" main h-screen w-screen bg-[#000000] select-none">
      <div className=" signin absolute top-[50%] left-[50%] -translate-[50%] bg-[#0F0F0F] rounded p-8">
        <div className=" logo flex items-center justify-center p-4">
          <h1 style={{ WebkitTextStroke: "0.5px white" }} className="text-[#162942] text-3xl font-bold">
            Lex<span style={{ WebkitTextStroke: "0.5px white" }} className="text-[#AE8623] textl-3xl font-semibold">Bridge</span>
          </h1>
        </div>

        <div className="  flex gap-2 flex-col text-center">
          <h1 className="text-2xl text-white font-semibold ">Welcome Back</h1>
          <p className="text-l text-[#c7c2c2] font-medium">
            Login to manage your account
          </p>
        </div>

        <div className="p-2 flex flex-col gap-4 text-center">
          <div className="w-100 h-12 bg-white flex gap-4 items-center justify-center rounded cursor-pointer active:scale-98 mt-2">
            <img
              className="w-8 h-8"
              src="../../src/assets/Images/google.png"
              alt=""
            />
            <h1 className="font-medium text-xl ">Sign in with Google</h1>
          </div>
          <div className="flex text-white mt-2">
            <div className="h-1 w-40">------------------------</div>
            <p className="pl-3">or</p>
            <div className="h-1 w-60">----------------------------</div>
          </div>
        </div>

        <div className="text-white flex flex-col gap-4 ">
          <form className="text-[#444242]">
          <div className="flex flex-col gap-2">
            <h1 className="text-l font-medium text-white">Email Address</h1>       
              <input
                className="w-100 h-10 border border-white rounded text-medium text-white font-medium p-2"
                type="text"
                placeholder="johndoe123@gmail.com"
              />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <h1 className="text-l font-medium text-white">Name</h1>       
              <input
                className="w-100 h-10 border border-white rounded text-medium text-white font-medium p-2"
                type="text"
                placeholder="John Doe"
              />
          </div>
          <div className="flex flex-col gap-2 w-100 mt-2">
              <h1 className="text-l font-semibold text-white">Create Password</h1>
              <input
                className="w-100 h-10 border border-white rounded text-medium text-white font-medium p-1"
                type="text"
                placeholder="Create a strong password min 8 characters"
              />

            <button className="px-30 py-2 bg-blue-700 rounded text-white text-l font-semibold mt-4 cursor-pointer ">
              Login
            </button>

            <h1 className="text-gray-600 font-medium text-l text-center">
                Already have an account?{" "}
              <span className="text-l font-bold text-blue-600 cursor-pointer ">
              <NavLink to="/signin">login Here</NavLink> 
              </span>
            </h1>
          </div>
          </form>
        </div>        
      </div>
    </div>
  );
};

export default SignIn;
