import React from 'react';

interface ContributionCardProps {
  name: string;
  nears: number;
  date: string;
}

function ContributionCard({name, nears, date}: ContributionCardProps) {
  return (
    <div className=" bg-white drop-shadow-3xl w-40 h-52 rounded-2xl flex flex-col items-center">
      <div className="w-40 flex justify-end p-1 mr-1">
        <p className="text-sm font-extralight text-blue-700">{date}</p>
      </div>
      <div className="w-full h-3/5 flex items-center justify-center overflow-clip">
        <img alt="contribution" src="proposalPlaceholder.jpeg" className="w-full h-full object-cover" />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-blue-700 font-semibold">{name}</p>
        <p className="text-blue-300 font-bold">{nears} NEARs</p>
      </div>
    </div>
  );
}

export default ContributionCard;