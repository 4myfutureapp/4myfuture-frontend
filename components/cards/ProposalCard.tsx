/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {useRouter} from 'next/router';

interface ProposalCardProps {
  title: string;
  description: string;
  nears: number;
}

function ProposalCard({title, description, nears}: ProposalCardProps) {
  const router = useRouter()
  return (
    <button className="md:w-80 w-40 md:h-[450px] h-60  bg-white drop-shadow-3xl rounded-lg flex flex-col items-center justify-start cursor-pointer" onClick={()=> router.push("/proposal")}>
      <div className="hidden lg:block w-11/12">
        <div className="w-full md:h-52 h-24 flex items-center justify-center rounded-lg overflow-clip mt-3">
          <img alt="proposalIMG" src="proposalPlaceholder.jpeg" className="w-full h-full object-cover" />
        </div>
        <div className="w-11/12 flex items-start mt-2 flex-col">
          <p className="text-blue-700 md:text-xl text-sm">{title}</p>
          <p className="md:text-sm text-xs font-extralight text-left text-gray-200 mt-5">{description}</p>
          <div className="md:w-80 w-40">
            <div className="w-11/12 md:h-3 h-2 bg-gray-100 rounded-xl mt-5">
              <div className={`md:h-3 h-2 w-[70%] bg-blue-700 rounded-xl`} />
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:mt-4 mt-2 md:items-end items-start">
            <p className="text-blue-600 font-bold md:text-xl text-xs md:ml-0 ml-2">{nears} NEARs</p>
            <p className="text-blue-800 font-light md:text-sm text-xs ml-2">away from our goal</p>
          </div>
        </div>
      </div>
      <div className="lg:hidden block w-11/12">
        <div className="w-ful h-24 flex items-center justify-center rounded-lg overflow-clip mt-3">
          <img alt="proposalIMG" src="proposalPlaceholder.jpeg" className="w-full h-full object-cover" />
        </div>
        <div className="w-11/12 flex items-start mt-1 flex-col">
          <p className="text-blue-700 text-sm">{title}</p>
          <p className="text-xs font-extralight text-left text-gray-200 mt-1">{description.substring(0, 40)} ...</p>
          <div className="md:w-80 w-40">
            <div className="w-11/12 h-2 bg-gray-100 rounded-xl mt-3">
              <div className={`h-2 w-[70%] bg-blue-700 rounded-xl`} />
            </div>
          </div>
          <div className="flex md:flex-row flex-col mt-2 md:items-end items-start">
            <p className="text-blue-600 font-bold text-xs ml-1">{nears} NEARs</p>
            <p className="text-blue-800 font-light text-xs ml-1">away from our goal</p>
          </div>
        </div>
      </div>
    </button>
  );
}

export default ProposalCard;