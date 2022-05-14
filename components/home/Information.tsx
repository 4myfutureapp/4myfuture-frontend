/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Information() {
  return(
    <div className="w-full md:h-screen h-[600px] bg-white relative flex items-center justify-center">
      <img className="hidden lg:block w-full" src="curve.png" alt="curve" />
      <div className="flex absolute w-full md:h-screen h-[600px] items-start justify-center md:mt-60 mt-20">
        <p className="font-display-300 text-blue-700 font-extralight md:text-3xl text-lg">Help students fund their academic goals</p>
      </div>
      <div className="flex flex-row absolute w-full h-[500px] items-center justify-center md:mt-32 mt-16 md:gap-x-20 gap-x-10 flex-wrap">
          <div className="md:w-72 w-40 md:h-96 h-52 drop-shadow-3xl bg-white rounded-lg flex flex-col items-center">
            <div className="md:h-1/2 h-20 w-full flex justify-center items-end">
              <img alt="easy" className="md:w-24 w-11" src="easy.svg" />
            </div>
            <div className=" md:h-1/2 h-20 flex flex-col justify-start items-center">
              <p className="text-blue-700 md:text-2xl text-lg md:mt-10 mt-1">Easy to Use</p>
              <p className="text-gray-500 md:text-lg text-sm font-extralight w-3/4 text-center md:mt-3 mt-0">Create proposals, Contribute and Receive fund</p>
            </div>  
          </div>
          <div className="md:w-72 w-40 md:h-96 h-52 drop-shadow-3xl bg-white rounded-lg flex flex-col items-center">
            <div className="md:h-1/2 h-20 w-full flex justify-center items-end">
              <img alt="easy" className="md:w-32 w-16" src="rewards.svg" />
            </div>
            <div className=" h-1/2 flex flex-col justify-start items-center">
              <p className="text-blue-700 md:text-2xl text-lg md:mt-10 mt-1">Rewards</p>
              <p className="text-gray-500 md:text-lg text-sm font-extralight md:w-3/4 w-5/6 text-center md:mt-3 mt-0">Contributors are rewarded with NFTs and soon native platform tokens</p>
            </div>
          </div>
        <div className="md:w-72 w-40 md:h-96 h-52 drop-shadow-3xl bg-white rounded-lg flex flex-col items-center">
          <div className="md:h-1/2 h-20 w-full flex justify-center items-end">
            <img alt="easy" className="md:w-24 w-12" src="audit.svg" />
          </div>
          <div className=" h-1/2 flex flex-col justify-start items-center">
              <p className="text-blue-700 md:text-2xl text-lg md:mt-10 mt-1">Transparency</p>
              <p className="text-gray-500 md:text-lg text-sm font-extralight w-3/4 text-center md:mt-3 mt-0">Option to view and Audit transactions</p>
            </div>
        </div>
      </div>
    </div>
  )
}