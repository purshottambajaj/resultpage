import React from 'react';

const Suggestions = () => {
  const suggestions = [
    { range: 'Q. 1-12', time: '40sec', difficulty: 'Easy' },
    { range: 'Q. 12-32', time: '1.5min', difficulty: 'Medium' },
    { range: 'Q. 32-40', time: '3min', difficulty: 'Hard' },
  ];

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h3 className="text-lg font-semibold mb-4">Suggestions</h3>
      <div className="flex flex-col space-y-4">
        {suggestions.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-sm p-3 bg-gray-100 rounded"
          >
            <p className="font-medium">{item.range}</p>
            <p className="text-gray-500">{item.time}</p>
            <p
              className={`font-bold ${
                item.difficulty === 'Easy'
                  ? 'text-green-500'
                  : item.difficulty === 'Medium'
                  ? 'text-yellow-500'
                  : 'text-red-500'
              }`}
            >
              {item.difficulty}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
