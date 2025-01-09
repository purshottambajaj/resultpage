import React from "react";

const ResultSummary = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-lg bg-white shadow-lg rounded-lg p-6">
        {/* Header */}
        <div className="text-center">
          <img
            src="https://via.placeholder.com/100"
            alt="Illustration"
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Your Result!</h2>
          <p className="text-gray-600">
            All your insights & details in one place
          </p>
        </div>

        {/* Score Section */}
        <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
          {/* User Score */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-700">You've Passed</p>
              <p className="text-2xl font-bold text-purple-600">
                136 <span className="text-gray-500">/ 240</span>
              </p>
            </div>
            <p className="text-sm font-medium text-green-600">76% Accuracy</p>
          </div>

          {/* Top Score */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="User"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-medium text-gray-700">Top Score</p>
                <p className="text-xl font-bold text-gray-800">230 / 240</p>
                <p className="text-sm text-gray-500">By Parth Akotkar</p>
              </div>
            </div>
            <p className="text-sm font-medium text-green-600">92% Accuracy</p>
          </div>
        </div>

        {/* Improve Marks */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">Improve your score by practicing more.</p>
          <button className="mt-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Practice More
          </button>
        </div>

        {/* Revisit Paper */}
        <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
          <p className="font-medium text-gray-700">Revisit Paper</p>
          <p className="text-gray-600 text-sm">
            Challenge your friends by simply sharing a link to this test.
          </p>
          <button className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Visit
          </button>
          <p className="mt-2 text-xs text-gray-500">
            Instructions for how to upload your handwritten material are given.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultSummary;
