import React from 'react';

const NirogGyanDifference = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#f2f7ff] py-8 px-4">
      <h1 className="text-3xl font-bold text-[#3261c8] mb-4 text-center">
        The NirogGyan Difference
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl">
        We’re not just simplifying reports; we’re reshaping how healthcare communicates.
      </p>

      <div className="flex flex-col gap-5 w-[60%]">
        <div className="border border-[#005ca7] bg-white rounded-[300px] shadow-[1px_2px_15px_rgba(0,0,0,0.15)] px-4 py-5">
          <h3 className="text-xl text-[#01a1d5] font-semibold mb-2 text-center">
            Human-Centered Design for 300 Parameters
          </h3>
          <p className="text-gray-700 text-center">
            Intuitive layouts, relatable language, and visually engaging content.
          </p>
        </div>

        <div className="border border-[#005ca7] bg-white rounded-[300px] shadow-[1px_2px_15px_rgba(0,0,0,0.15)] px-4 py-5">
          <h3 className="text-xl text-[#01a1d5] font-semibold mb-2 text-center">
            Real-Time Automation
          </h3>
          <p className="text-gray-700 text-center">
            Seamless integration with Laboratory Information Systems (LIS) for fast, error-free results.
          </p>
        </div>

        <div className="border border-[#005ca7] bg-white rounded-[300px] shadow-[1px_2px_15px_rgba(0,0,0,0.15)] px-4 py-5">
          <h3 className="text-xl text-[#01a1d5] font-semibold mb-2 text-center">
            Data with a Heart
          </h3>
          <p className="text-gray-700 text-center">
            Every test result is transformed into actionable health advice, graphs, and tips.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NirogGyanDifference;


/* import React from 'react';

const NirogGyanDifference = () => {
  return (
    <div className="py-16 px-6 bg-white text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-[#3261c8] mb-4">
        The NirogGyan Difference
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
        We’re not just simplifying reports; we’re reshaping how healthcare communicates.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition duration-300">
          <h3 className="text-xl font-semibold text-[#01a1d5] mb-2">
            Human-Centered Design for 300 Parameters
          </h3>
          <p className="text-gray-700">
            Intuitive layouts, relatable language, and visually engaging content.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition duration-300">
          <h3 className="text-xl font-semibold text-[#01a1d5] mb-2">
            Real-Time Automation
          </h3>
          <p className="text-gray-700">
            Seamless integration with Laboratory Information Systems (LIS) for fast, error-free results.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition duration-300">
          <h3 className="text-xl font-semibold text-[#01a1d5] mb-2">
            Data with a Heart
          </h3>
          <p className="text-gray-700">
            Every test result is transformed into actionable health advice, graphs, and tips.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NirogGyanDifference;
 */