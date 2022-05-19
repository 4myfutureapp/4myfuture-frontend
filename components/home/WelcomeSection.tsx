/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Fade from 'react-reveal';
import { useRouter } from 'next/router';

export default function WelcomeSection() {
  const router = useRouter();
  return (
    <div className="w-full md:h-[650px] h-[250px] flex flex-row item-center">
      <Fade left>
        <div className="flex flex-col justify-center z-10 md:-mt-0 -mt-10">
          <div className="flex flex-row items-center md:ml-20 ml-10">
            <p className="text-blue-700 font-display-400 font-light md:text-6xl text-2xl">Help</p>
            <p className="text-yellow-300 font-display-500 font-regular md:text-7xl text-3xl md:ml-5 ml-3">Students</p>
          </div>
          <div className="flex flex-row items-center md:ml-20 ml-10">
            <p className="text-blue-700 font-display-400 font-light md:text-6xl text-2xl md:w-[510px] w-[210px]">Reach Their Dreams</p>
          </div>
          <button 
            className="font-display-200 md:h-14 h-8 md:w-60 w-32 md:ml-20 ml-10 bg-gradient-to-b from-blue-700 to-blue-100 md:rounded-xl rounded-md text-white md:text-xl text-md font-light md:mt-16 mt-5 hover:bg-white hover:text-blue-700 drop-shadow-3xl"
            onClick={()=> router.push("/proposals")}
          >
            Start Now
          </button>
        </div>
      </Fade>
      <Fade right>
        <div className="flex w-full md:h-[650px] h-[220px] items-center justify-end absolute md:ml-0 ml-10">
          <img alt="rocket" src="rocket.svg" className="flex md:w-3/6 w-[270px]" />
        </div>
      </Fade>
      
    </div>
  )
}