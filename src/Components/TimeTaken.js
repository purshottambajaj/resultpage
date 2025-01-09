import React from 'react';

const TimeTaken = () => {
  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h3 className="text-lg font-semibold mb-4">Time Taken</h3>
      <div className="space-y-4">
        {/* First Timeline */}
        <div>
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <p>10 sec</p>
            <p>90 sec</p>
          </div>
          <div className="relative bg-gray-200 h-4 rounded">
            <div
              className="absolute top-0 left-0 h-4 bg-green-500 rounded-l"
              style={{ width: '40%' }}
            ></div>
            <div
              className="absolute top-0 left-[40%] h-4 bg-red-500"
              style={{ width: '30%' }}
            ></div>
            <div
              className="absolute top-0 left-[70%] h-4 bg-blue-500 rounded-r"
              style={{ width: '30%' }}
            ></div>
          </div>
        </div>

        {/* Second Timeline */}
        <div>
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <p>4 sec</p>
            <p>4 min</p>
          </div>
          <div className="relative bg-gray-200 h-4 rounded">
            <div
              className="absolute top-0 left-0 h-4 bg-green-500 rounded-l"
              style={{ width: '25%' }}
            ></div>
            <div
              className="absolute top-0 left-[25%] h-4 bg-yellow-500"
              style={{ width: '50%' }}
            ></div>
            <div
              className="absolute top-0 left-[75%] h-4 bg-red-500 rounded-r"
              style={{ width: '25%' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTaken;
