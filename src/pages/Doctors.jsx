import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doctors } from "../assets/assets";
import Footer from "../components/Footer";

const Doctors = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-6 md:px-16 lg:px-24 py-10 bg-[#f9fbff] min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-center text-[#1A1F36] font-sans">
        Book Your Favourite Doctors
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search by name or specialization..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              onClick={() => navigate(`/appointment/${doctor.id}`)}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <div className="w-full h-40 bg-blue-50 content-center flex items-center justify-center">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto p-2"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm mb-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      doctor.availability === "Available Today"
                        ? "bg-green-500"
                        : doctor.availability === "Fully Booked"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                    }`}
                  ></div>
                  <p
                    className={`${
                      doctor.availability === "Available Today"
                        ? "text-green-600"
                        : doctor.availability === "Fully Booked"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {doctor.availability}
                  </p>
                </div>
                <p className="text-lg font-semibold text-gray-800">{doctor.name}</p>
                <p className="text-sm text-gray-600 mb-2">{doctor.specialty}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No doctors found.
          </p>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Doctors;
