import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#002d62] text-white px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-12 font-poppins">
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-10">
        {/* Company */}
        <div className="flex-1 min-w-[250px]">
          <h4 className="text-xl font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">How it Works</li>
            <li className="hover:underline cursor-pointer">
              Industry Solutions
            </li>
            <li className="hover:underline cursor-pointer">Blogs</li>
            <li className="hover:underline cursor-pointer">Book Demo</li>
            <li className="hover:underline cursor-pointer">
              Subscribe to Newsletter
            </li>
          </ul>
        </div>

        {/* Further Information */}
        <div className="flex-1 min-w-[250px]">
          <h4 className="text-xl font-semibold mb-4">Further Information</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">
              Terms of Services
            </li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex-1 min-w-[250px]">
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <div className="flex items-start gap-3 mb-4 text-sm">
            <span>
              D-533, Sec 1, Avantika Rohini, New Delhi, India - 110085
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span>sales@niroggyan.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
