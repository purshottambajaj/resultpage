import React from "react";
import { FiArrowUpRight } from "react-icons/fi"; // Importing an arrow icon

const ResponseTime = () => {
  return (
    <div className="container mx-auto p-4 w-full">
      <div className="p-6 rounded-lg shadow-xl bg-white">
        <h2 className="text-3xl font-extrabold text-muted mb-6">Response Time</h2>

        <div className="flex items-center bg-blue-700 px-2 w-full">
          <span className="text-lg font-semibold text-white">Std Time:</span>
          <span className="ml-2 text-lg text-white">2 min</span>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-between border-dotted">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-green-500">60%</span>
            <span className="ml-2 text-lg text-muted">faster</span>
          </div>

          <div className="flex items-center text-purple-500">
            <FiArrowUpRight size={20} />
            <span className="ml-1 text-lg font-semibold">2 min</span>
          </div>
        </div>

        <hr className="my-6" />

        <p className="text-xl text-red-500 font-bold mt-6 text-center">
          You are slow!
        </p>
      </div>
    </div>
  );
};

export default ResponseTime;
