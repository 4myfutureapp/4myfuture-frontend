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
          <p className="text-blue-700 text-3xl font-semibold">{name}</p>
          <p className="text-blue-300 text-xl font-light">by {user}</p>
        </div>
        <div className="flex justify-end w-2/5 mr-10">
          <p className="text-blue-300 text-lg font-light">{startDate} -  {endDate}</p>
        </div>
      </div>
      <div>
        <div className="w-96">
          <div className="w-11/12 h-4 bg-gray-300 rounded-xl mt-5">
            <div className={`h-4 w-[70%] bg-blue-700 rounded-xl`} />
          </div>
        </div>
        <div className="flex flex-row mt-2 items-end">
          <p className="text-blue-600 font-bold text-xl">{nears} NEARs</p>
          <p className="text-blue-800 font-light text-sm ml-2">away from our goal of {goal} NEARs</p>
        </div>
      </div>
      <div className="flex flex-row w-full gap-x-16 ">
        <a href={institution} target="_blank"  className="flex flex-row items-center hover:text-blue-300 text-blue-700 cursor-pointer" rel="noreferrer">
          <InstitutionIcon className="w-10 mr-2" />
          <p className=" text-lg">Institution</p>
        </a>
        <a href={pensum} target="_blank"  className="flex flex-row items-center hover:text-blue-300 text-blue-700 cursor-pointer" rel="noreferrer">
          <PensumIcon className="w-10 mr-2" />
          <p className=" text-lg">Pensum</p>
        </a>
      </div>
      <p className="w-8/12 text-gray-200 font-extralight">
        {showMore ? text : `${text.substring(0, 260)}`}
        <button 
          type="button" 
          onClick={()=> setShowMore(!showMore)}
          className="pl-1 text-blue-300 cursor-pointer hover:underline font-semibold"
        >
          {showMore ? "Show Less..." : "Show More..."}
        </button>
      </p>
      <div className="flex flex-row mt-8 gap-x-10">
        <button type="button" className="w-48 h-16 bg-blue-300 hover:bg-blue-700 rounded-xl text-white drop-shadow-3xl text-lg font-light">Contribute</button>
        <button 
          type="button" 
          className="w-48 h-16 border-2 border-blue-300 hover:text-blue-700 hover:border-blue-700  rounded-xl text-blue-300 flex flex-row items-center justify-start gap-x-10 text-lg font-light"
        >
          <ShareIcon className="w-7 ml-4" />
          Share
        </button>
      </div>
    </div>
  );
}

export default ProposalData;