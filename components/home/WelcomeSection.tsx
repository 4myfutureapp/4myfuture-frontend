/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Fade from 'react-reveal';

export default function WelcomeSection() {
  return (
    <div className="w-full md:h-[650px] h-[200px] flex flex-row item-center">
      <Fade left>
        <div className="flex flex-col justify-center z-10">
          <div className="flex flex-row items-center md:ml-20 ml-5">
            <p className="text-blue-700 font-display-400 font-light md:text-6xl text-2xl">Help</p>
            <p className="text-yellow-300 font-display-500 font-regular md:text-7xl text-3xl md:ml-5 ml-3">Students</p>
          </div>
          <div className="flex flex-row items-center md:ml-20 ml-5">
            <p className="text-blue-700 font-display-400 font-light md:text-6xl text-2xl md:w-[510px] w-[210px]">Reach Their Dreams</p>
          </div>
          <button className="font-display-200 md:h-14 h-10 md:w-60 w-40 md:ml-20 ml-5 bg-gradient-to-b from-blue-700 to-blue-100 rounded-xl text-white text-xl font-light md:mt-16 mt-5 hover:bg-white hover:text-blue-700 drop-shadow-3xl">
            Start Now
          </button>
        </div>
      </Fade>
      <Fade right>
        <div className="flex w-full md:h-[650px] h-[180px] items-center justify-end absolute md:ml-0 ml-10">
          <img alt="rocket" src="rocket.svg" className="flex md:w-3/6 w-[270px]" />
        </div>
      </Fade>
      
    </div>
  )
}