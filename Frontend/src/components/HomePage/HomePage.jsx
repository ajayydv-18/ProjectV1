import React from "react";
import NavBar from "../NavBar/NavBar";

const HomePage = () => {
  return (
    <div className = "bg-black overflow-x-hidden">
      <NavBar />
      <div className="bg-black h-[84.5vh] w-screen flex gap-2 items-center justify-center p-4 font-gilroy">
        <div className="h-full w-[48%] p-2 flex flex-col gap-4">
          <h1 className="text-7xl font-semibold capitalize bg-linear-to-r from-blue-600 to-[#e7bd3e] bg-clip-text text-transparent">
            We Help students connect with their right mentors.
          </h1>

          <p className="text-l font-semibold text-[#5a5555]">
            We have right mentors for every query , we will find you <br /> a
            right mentor and help you to connect them <br /> easily and
            effectively.
          </p>

          <button className="text-l font-semibold text-white bg-linear-to-r from-blue-600 to-[#0a0a25]  rounded px-2 py-2 cursor-pointer active:scale-97 shadow-xs shadow-white mt-2">
            Need Help?
          </button>
        </div>

        <div className="h-full w-[48%] relative overflow-hidden">
          <img
            className="h-full w-full object-cover object-[center_18%]"
            src="../../src/assets/Images/homeImage.png"
            alt=""
          />
        </div>
      </div>

      <div className="bg-[#000000] w-screen flex items-center justify-center px-6 mt-4">
      <div className="w-full bg-[#000000] rounded-3xl p-6 flex flex-col lg:flex-row gap-12 ">
        
        <div className="relative flex-1 flex items-center justify-center">
          <div className="absolute inset-0 bg-linear-to-r from-[#0C0E2E] to-[#FED92B] rounded-3xl" />

          {/* Mentor Card */}
          <div className="relative bg-[#000000] rounded-3xl p-6 w-80 text-white shadow-xl">
            
            {/* Floating badge */}
            <div className="absolute -top-4 left-4 bg-[#2a2b2f] text-xs px-3 py-1 rounded-full shadow">
              Available Solutions
            </div>

            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
              alt="mentor"
              className="rounded-xl mb-4"
            />

            {/* Easy Methods */}
            <div className="absolute left-[-30px] top-[40%] bg-[#2a2b2f] text-xs px-3 py-2 rounded-xl shadow">
              Easy Methods <br />
              <span className="text-gray-400">Through video calls</span>
            </div>

            {/* Bottom Info */}
            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="text-sm font-semibold">Allen John</p>
                <p className="text-xs text-gray-400">Mentor</p>
              </div>
              <button className="bg-[#0E3E79] text-white px-6 py-2 text-sm rounded-xl font-semibold">
                Call
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 text-white flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2 bg-linear-to-r from-blue-600 to-[#0a0a25] bg-clip-text text-transparent ">
            Find Your Right Mentor
          </h1>
          <p className="text-gray-400 mb-8">
            Stay connected with a monthly or yearly subscription.
          </p>

          {/* Feature Cards */}
          <div className="space-y-4">
            <div className="bg-[#1b1c1f] p-5 rounded-2xl flex gap-4 shadow">
              
              <div>
                <h3 className="text-xl font-bold capitalize bg-linear-to-r from-blue-800 to-[#e7bd3e] bg-clip-text text-transparent">
                  Ring or message your mentor anytime.
                </h3>
                <p className="text-sm text-gray-400">
                  We have the right mentors for any job, we will find you the
                  right mentor and help you connect with them easily.
                </p>
              </div>
            </div>

            <div className="bg-[#1b1c1f] p-5 rounded-2xl flex gap-4 shadow">             
              <div>
                <h3 className="text-xl font-bold capitalize bg-linear-to-r from-blue-800 to-[#e7bd3e] bg-clip-text text-transparent">
                  Become a mentor and help out people
                </h3>
                <p className="text-sm text-gray-400">
                  We have the right mentors for any job, we will find you the
                  right mentor and help you connect with them easily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default HomePage;
