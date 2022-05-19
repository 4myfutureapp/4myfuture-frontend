/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface ProposalCardProps {
  title: string;
  description: string;
  nears: number;
}

function ProposalCard({title, description, nears}: ProposalCardProps) {
  return (
    <button className="w-80 h-[450px] bg-white drop-shadow-3xl rounded-lg flex flex-col items-center justify-start">
      <div className="w-11/12 h-52 flex items-center justify-center rounded-lg overflow-clip mt-3">
        <img alt="proposalIMG" src="proposalPlaceholder.jpeg" className="w-full h-full object-cover" />
      </div>
      <div className="w-10/12 flex items-start mt-2 flex-col">
        <p className="text-blue-700 text-xl">{title}</p>
        <p className="text-sm font-extralight text-left text-gray-200 mt-5">{description}</p>
        <div className="w-full h-3 bg-gray-100 rounded-xl mt-5">
          <div className="h-3 w-[80%] bg-blue-700 rounded-xl" />
        </div>
        <div className="flex flex-row mt-4 items-end">
          <p className="text-blue-600 font-bold text-xl">{nears} NEARs</p>
          <p className="text-blue-800 font-light text-sm ml-2">away from our goal</p>
        </div>
      </div>
    </button>
  );
}

export default ProposalCard;