import React from 'react';
import Header from './Components/Header';
import ResultSummary from './Components/ResultSummary';
import SubjectUnderstanding from './Components/SubjectUnderstanding';
import ResponseTime from './Components/ResponseTime';
import ApproachData from './Components/ApproachData';
import Suggestions from './Components/Suggestions';
import TimeTaken from './Components/TimeTaken';
import CompareAccuracy from './Components/CompareAccuracy';
import Compare from './Components/Compare';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Left Card for Result Summary */}
        <div className="col-span-1 md:col-span-4 bg-gray-100 p-6 rounded-lg shadow-lg">
          <ResultSummary />
        </div>

        {/* Right Card for other components */}
        <div className="col-span-1 md:col-span-8 bg-white p-6 rounded-lg shadow-lg">
          <div className="grid gap-6">
            <div  className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            <SubjectUnderstanding />
            <ResponseTime />
            <ApproachData />
            <Suggestions />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <CompareAccuracy />
            <TimeTaken />
          </div>
          </div>
        </div>
        
      </main>
    </div>
  );
};

export default App;
