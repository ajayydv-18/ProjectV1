import React from "react";
import NavBar from "../NavBar/NavBar";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-black h-[84.5vh] w-screen flex gap-2 items-center justify-center p-4 font-gilroy">
        <div className="h-full w-[48%] p-2 flex flex-col gap-4">
          <h1 className="text-7xl font-semibold capitalize bg-linear-to-r from-blue-600 to-[#e7bd3e] bg-clip-text text-transparent">
            We Help students connect with their right mentors.
          </h1>

          <p className="text-l font-semibold text-[#5a5555]">
            We have right mentors for every query , we will find you <br/> a right mentor and help you to connect them <br /> easily and effectively.
          </p>

            <button className="text-l font-semibold text-white bg-linear-to-r from-blue-600 to-[#0a0a25]  rounded px-2 py-2 cursor-pointer active:scale-97 shadow-xs shadow-white mt-2">
              Need Help?
            </button>

        </div>

        <div className="bg-red-600 h-full w-[48%] relative overflow-hidden">
  <img
    className="h-full w-full object-cover object-[center_18%]"
    src="../../src/assets/Images/homeImage.png"
    alt=""
  />
</div>

      </div>
    </div>
  );
};
export default HomePage;
