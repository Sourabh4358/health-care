import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="text-gray-900 py-10 px-4 md:px-16 lg:px-24">
      {/* Heading */}
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-semibold text-[#1A1F36] tracking-tight font-sans">
          Top Doctors to Book
        </h1>
        <p className="sm:w-1/2 text-center text-[#4B5563] text-lg font-normal mt-2 leading-relaxed">
          Explore our handpicked list of expert doctors ready to assist you with
          top-notch care.
        </p>
      </div>

      {/* Doctors Grid */}
      <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
        {doctors.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="border border-blue-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-1 cursor-pointer"
            onClick={() => navigate(`/appointment/${item.id}`)}
          >
            {/* Profile Image */}
            <div className="w-full h-40 bg-blue-50 flex justify-center items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-full p-2"
              />
            </div>

            {/* Details */}
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm mb-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    item.availability === "Available Today"
                      ? "bg-green-500"
                      : item.availability === "Fully Booked"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                  }`}
                ></div>
                <p
                  className={`${
                    item.availability === "Available Today"
                      ? "text-green-600"
                      : item.availability === "Fully Booked"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {item.availability}
                </p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.specialty}</p>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => {
            navigate("/doctors");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 hover:bg-blue-100 transition"
        >
          More
        </button>
      </div>
    </div>
  );
};

export default TopDoctors;
