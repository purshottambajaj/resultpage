import React from 'react';

const ApproachData = () => {
  const data = [
    { label: 'Based on Facts', percentage: 25 },
    { label: 'Based on Analysis', percentage: 32 },
    { label: 'Based on Elimination', percentage: 19 },
    { label: 'Based on Guess', percentage: 24 },
  ];

  return (
    <div className="p-6 bg-white rounded shadow-md w-full">
      <h3 className="text-lg font-semibold mb-4">Approach Data</h3>
      <div className="">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center mb-1 border p-1 px-2 border-blue-400"
          >
            <p className="bg-blue-300 font-bold">{item.percentage}%</p>
            <p className="">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApproachData;
