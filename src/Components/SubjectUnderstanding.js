import React from 'react';

const SubjectUnderstanding = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-fit">
      <h2 className="text-gray-500 font-semibold mb-6">Subject Understanding</h2>
      <div className=" gap-3 rounded-full">
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-2 rounded-md  m-1">
          Geography
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white px-2 rounded-md  m-1 ">
          Politics
        </button>
        <button className="bg-teal-500 hover:bg-teal-700 text-white rounded-md  m-1  px-2 ">
          Current Affairs
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white rounded-md  m-1  px-2 ">
          General Studies
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md  m-1  px-2 ">
          Mathematics
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white rounded-md  m-1  px-2 ">
          Social Studies
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white rounded-md  m-1  px-2">
          English Literature
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white rounded-md  m-1  px-2   ">
          Indian History
        </button>
        <button className="bg-teal-500 hover:bg-teal-700 text-white rounded-md  m-1 px-2 ">
          Economics
        </button>
      </div>
    </div>
  );
};

export default SubjectUnderstanding;
