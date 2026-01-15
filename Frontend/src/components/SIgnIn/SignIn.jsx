import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
const SignIn = () => {

  let {handleLogin} = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  //submit handler
  const submitHandler = async (e) => {
    
    try{
      e.preventDefault(); 
      let msg = await handleLogin(userEmail , userPassword);
      console.log(msg);
      toast(msg , {theme: "dark"});
    }
    catch(e){
          console.log(e.response.data);
          toast.error(e.response.data.msg , {theme: "dark" })
    }
   
  };




  return (
    <div className=" main h-screen w-screen bg-[#000000] select-none flex items-center justify-center p-10">
      <div className="bg-[#0F0F0F] rounded flex flex-col justify-center items-center p-4">
        <div className=" logo flex items-center justify-center p-6">
          <h1
            style={{ WebkitTextStroke: "0.5px white" }}
            className="text-[#162942] text-5xl font-bold"
          >
            Lex
            <span
              style={{ WebkitTextStroke: "0.5px white" }}
              className="text-[#AE8623] textl-5xl font-semibold"
            >
              Bridge
            </span>
          </h1>
        </div>

        <div className="  flex gap-2 flex-col text-center">
          <h1 className="text-3xl text-white font-semibold ">Welcome Back</h1>
          <p className="text-l text-[#c7c2c2] font-medium">
            Login to manage your account
          </p>
        </div>

        <div className="p-2 flex flex-col gap-4 text-center">
          <div className="w-100 h-12 bg-[#181A1B] text-white flex gap-4 items-center justify-center rounded cursor-pointer active:scale-98 mt-4">
            <img
              className="w-6 h-6"
              src="../../src/assets/Images/google.png"
              alt=""
            />
            <h1 className="font-normal text-l ">Sign in with Google</h1>
          </div>
          <div className="flex text-white mt-2">
            <div className="h-1 w-40">----------------------</div>
            <p className="pl-3">or</p>
            <div className="h-1 w-60">--------------------------</div>
          </div>
        </div>

        <div className="text-white flex flex-col gap-4 ">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="text-[#444242]"
          >
            <div className="flex flex-col gap-2 mt-4">
              <h1 className="text-l font-medium text-white">Email Address</h1>

              <input
                onChange={(dets) => {
                  setUserEmail(dets.target.value);
                  console.log(dets.target.value);
                }}
                className="w-100 h-10 rounded text-[15px] text-white font-medium p-2 bg-[#181A1B] shadow-xs shadow-[#5a5656]"
                type="text"
                placeholder="johndoe123@gmail.com"
                value={userEmail}
              />
            </div>
            <div className="flex flex-col gap-2 w-100 mt-4">
              <div className="flex items-center justify-between">
                <h1 className="text-l font-semibold text-white">Password</h1>
                <h1 className="text-l font-semibold text-blue-800 cursor-pointer">
                  Forgot Password
                </h1>
              </div>

              <input
                onChange={(dets) => {
                  setUserPassword(dets.target.value);
                }}
                className="w-100 h-10 rounded text-[15px] text-white font-medium p-2 bg-[#181A1B] shadow-xs shadow-[#5a5656]"
                type="text"
                placeholder="Enter your password"
                value={userPassword}
              />

              <button className="px-30 py-3 bg-blue-700 rounded text-white text-l font-semibold mt-4 cursor-pointer ">
                Login
              </button>

              <h1 className="text-gray-600 font-medium text-l text-center">
                Don't have an account yet?{" "}
                <span className="text-l font-semibold text-blue-600 cursor-pointer mt-2 ">
                  <NavLink to="/signup">Create New Account</NavLink>
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
