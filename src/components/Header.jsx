import React from "react";
import { assets } from "../assets/assets";
const Header = () => {
  return (
    // <div className="flex flex-col md:flex-row flex-wrap bg-secondary rounded-lg  px-6 md:px-10 lg:px-20 ">
    <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex flex-col-reverse lg:flex-row items-center gap-8 ">
      {/* ----left side---- */}
      <div className="flex flex-col items-start justify-start gap-4 py-10 m-auto md:py-(10vW) md:mb[-30px] md:w-[80%] ">
        <p className="text-[40px] md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#3261c8] to-[#01a1d5] font-[700] font-serif">
          Never Let Patients Leave <br /> Confused About Their <br /> Health
          Again
        </p>

        <span className="text-[18px] text-black font-[700] font-poppins max-w-[648px] block">
          Intelligent Reporting that's Built for
          <span className="text-[#3260c7]"> Providers</span>,<br /> Designed for
          <span className="text-[#3260c7]"> Patients</span>
        </span>

        <div>
          <div className="flex flex-col gap-4 mt-5">
            {/* Feature 1 */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex-shrink-0">
                <img
                  src={assets.miniphone}
                  alt="report-icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-poppins text-black text-[18px] font-semibold m-0 ">
                Smart Report
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex-shrink-0">
                <img
                  src={assets.file}
                  alt="appVideo-icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-poppins text-black text-[18px] font-semibold m-0 ">
                App & Video
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex-shrink-0">
                <img
                  src={assets.analytics}
                  alt="aiAnalytics-icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-poppins text-black text-[18px] font-semibold m-0 ">
                AI Analytics
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ----Right side---- */}
      <div>
        <img src={assets.phone} alt="" />
      </div>
    </div>
  );
};

export default Header;
