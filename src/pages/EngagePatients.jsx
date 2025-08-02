import React from 'react';
import { assets } from '../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const EngagePatients = () => {
  const points = [
    'Delighting clients since 2019',
    '400+ biomarkers covered',
    'Over 2 million reports processed',
    'Improving Revenues for Providers',
  ];

  return (
    <div className="bg-[#f7f9fc] py-12">
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex flex-col-reverse lg:flex-row items-center gap-8">

        {/* Left Content */}
        <div className="lg:w-1/2">
          <div className="mb-4">
            <h2 className="text-3xl font-semibold text-[#3261c8] mb-4">
              The New Way to Engage Patients
            </h2>
          </div>

          <div className="mb-6">
            <p className="text-gray-800 text-lg">
              The first point-of-evidence in Healthcare is a Lab Test Report.
              <br />
              <br />
              By transforming these reports, <span className="font-bold text-[#3567D6]">NirogGyan</span>'s software for Healthcare Providers empowers Patients through Health Education and Analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((text, index) => (
              <div key={index} className="flex items-start gap-2 text-gray-800">
                {/* <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 flex-shrink-0 mt-1">
                  <circle cx="15" cy="15" r="14.75" stroke="#DDE0E1" strokeWidth="0.5" />
                  <path d="M8 14.2857L13.3333 20L22 10" stroke="#3567D6" strokeLinecap="round" />
                </svg> */}
                <FontAwesomeIcon icon={faCheckCircle} className="text-[#3567D6] w-6 h-6 mt-1 flex-shrink-0" />

                <span className="text-[16px] font-bold">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={assets.doctorprofile}
            alt="Engage Patients"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default EngagePatients;
