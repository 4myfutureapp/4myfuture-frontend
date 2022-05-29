import React from 'react';
import { Fade } from 'react-reveal';

interface ContributionDataProps {
  contributions: number;
  donated: number;
  students: number;
}

function ContributionData({contributions, donated, students}: ContributionDataProps) {
  return (
    <Fade top>
    <div className="w-full flex flex-row justify-evenly mt-16">
      <div className="bg-blue-300 w-72 h-28 rounded-full flex flex-col justify-center items-center gap-y-2">
        <p className="text-white text-6xl font-light">{contributions}</p>
        <p className="text-white text-xl font-extralight">contributions made</p>
      </div>
      <div className="bg-blue-700 w-72 h-28 rounded-full flex flex-col justify-center items-center gap-y-2">
        <p className="text-white text-6xl font-light">{donated}</p>
        <p className="text-white text-xl font-extralight">NEARs donated</p>
      </div>
      <div className="bg-blue-300 w-72 h-28 rounded-full flex flex-col justify-center items-center gap-y-2">
        <p className="text-white text-6xl font-light">{students}</p>
        <p className="text-white text-xl font-extralight">students helped</p>
      </div>
    </div>
    </Fade>
  );
}

export default ContributionData;