import React from 'react';
import InstitutionIcon from '../icons/InstitutionIcon';
import PensumIcon from '../icons/PensumIcon';
import ShareIcon from '../icons/ShareIcon';

interface ProposalDataProps {
  name: string;
  user: string;
  goal: number;
  nears: number;
  institution: string;
  pensum: string;
  text: string;
  startDate: string;
  endDate: string;
}

function ProposalData({name, user, goal, nears, institution, pensum, text, startDate, endDate}: ProposalDataProps) {
  const [ showMore, setShowMore ] = React.useState(false);
  return (
    <div className="w-full flex flex-col mt-10 gap-y-5 ml-10">
      <div className="flex flex-row w-11/12">
        <div className="flex flex-col items-start justify-start w-3/5">
          <p className="text-blue-700 md:text-3xl text-lg font-semibold">{name}</p>
          <p className="text-blue-300 md:text-xl text-md font-light">by {user}</p>
        </div>
        <div className="flex justify-end md:w-2/5 w-3/4 mr-10">
          <p className="text-blue-300 md:text-lg text-xs font-light">{startDate} -  {endDate}</p>
        </div>
      </div>
      <div>
        <div className="md:w-96 w-11/12">
          <div className="w-11/12 md:h-4 h-3 bg-gray-300 rounded-xl md:mt-5 mt-2">
            <div className={`md:h-4 h-3 w-[70%] bg-blue-700 rounded-xl`} />
          </div>
        </div>
        <div className="flex flex-row mt-2 items-end">
          <p className="text-blue-600 font-bold text-xl">{nears} NEARs</p>
          <p className="text-blue-800 font-light text-sm ml-2">away from our goal of {goal} NEARs</p>
        </div>
      </div>
      <div className="flex flex-row w-full gap-x-16 ">
        <a href={institution} target="_blank"  className="flex flex-row items-center hover:text-blue-300 text-blue-700 cursor-pointer" rel="noreferrer">
          <InstitutionIcon className="md:w-10 w-7 mr-2" />
          <p className="md:text-lg text-md">Institution</p>
        </a>
        <a href={pensum} target="_blank"  className="flex flex-row items-center hover:text-blue-300 text-blue-700 cursor-pointer" rel="noreferrer">
          <PensumIcon className="md:w-10 w-7 mr-2" />
          <p className="md:text-lg text-md">Pensum</p>
        </a>
      </div>
      <p className="md:w-8/12 w-10/12 text-gray-200 font-extralight md:text-lg text-sm">
        {showMore ? text : `${text.substring(0, 260)}`}
        <button 
          type="button" 
          onClick={()=> setShowMore(!showMore)}
          className="pl-1 text-blue-300 cursor-pointer hover:underline font-semibold"
        >
          {showMore ? "Show Less..." : "Show More..."}
        </button>
      </p>
      <div className="flex flex-row md:mt-8 mt-5 md:gap-x-10 gap-x-5 md:mb-0 mb-10">
        <button type="button" className="md:w-48 w-32 md:h-16 h-12 bg-blue-300 hover:bg-blue-700 rounded-xl text-white drop-shadow-3xl text-lg font-light">Contribute</button>
        <button 
          type="button" 
          className="md:w-48 w-32 md:h-16 h-12 border-2 border-blue-300 hover:text-blue-700 hover:border-blue-700  rounded-xl text-blue-300 flex flex-row items-center justify-start md:gap-x-10 gap-x-4 text-lg font-light"
        >
          <ShareIcon className="md:w-7 w-5 ml-4" />
          Share
        </button>
      </div>
    </div>
  );
}

export default ProposalData;