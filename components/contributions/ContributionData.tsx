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
      <div className="w-full flex flex-row justify-evenly md:mt-16 mt-8">
        <div className="bg-blue-300 md:w-72 w-28 h-28 rounded-full flex flex-col justify-center items-center gap-y-2">
          <p className="text-white md:text-6xl text-2xl font-light">{contributions}</p>
          <p className="text-white md:text-xl text-sm text-center font-extralight">contributions made</p>
        </div>
        <div className="bg-blue-700 md:w-72 w-28 h-28 rounded-full flex flex-col justify-center items-center gap-y-2">
          <p className="text-white md:text-6xl text-2xl font-light">{donated}</p>
          <p className="text-white md:text-xl text-sm text-center md:w-full w-24 font-extralight">NEARs donated</p>
        </div>
        <div className="bg-blue-300 md:w-72 w-28 h-28 rounded-full flex flex-col justify-center items-center gap-y-2">
          <p className="text-white md:text-6xl text-2xl font-light">{students}</p>
          <p className="text-white md:text-xl text-sm text-center md:w-full w-24 font-extralight">students helped</p>
        </div>
      </div>
    </Fade>
  );
}

export default ContributionData;