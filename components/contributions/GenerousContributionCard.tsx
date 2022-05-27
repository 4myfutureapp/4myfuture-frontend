/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Fade } from 'react-reveal';

interface GenerousContributionCardProps {
  name: string;
  date: string;
  nears: number;
}

function GenerousContributionCard({name, date, nears}: GenerousContributionCardProps) {
  return (
    <Fade right>
    <div className="w-9/12 bg-blue-300 bg-opacity-25 h-[600px] mt-20 rounded-xl flex flex-col justify-center items-center">
      <p className="text-blue-700 text-2xl w-60 text-center mb-5">Your Most Generous Contribution</p>
      <div className=" bg-white drop-shadow-3xl w-9/12 h-[450px] rounded-2xl flex flex-col items-center">
      <div className="w-full mr-20 flex justify-end p-1">
        <p className="text-md font-extralight text-blue-700">{date}</p>
      </div>
      <div className="w-full h-3/5 flex items-center justify-center overflow-clip ">
        <img alt="contribution" src="proposalPlaceholder.jpeg" className="w-full h-full object-cover" />
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-8 gap-y-5">
        <p className="text-blue-700 font-semibold text-2xl">{name}</p>
        <p className="text-blue-300 font-bold text-3xl">{nears} NEARs</p>
      </div>
    </div>
    </div>
    </Fade>
  );
}

export default GenerousContributionCard;