/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Fade from 'react-reveal';

export default function ContributorSection() {
  return (
    <div className="w-full md:h-screen h-[500px] flex flex-row items-center justify-evenly">
      <Fade left>
        <div className="hidden  w-96 h-[500px] lg:flex items-end justify-center">
          <img alt="telescope" src="telescope.svg" className="w-96" />
        </div>
      </Fade>
      <Fade right>
        <div className="flex flex-col bg-white md:h-[500px] h-96  md:w-[500px] w-80 overflow-y-clip drop-shadow-3xl rounded-xl">
          <div className="md:h-[100px] h-16 w-full bg-blue-400 flex items-center justify-center">
            <p className="text-white md:text-4xl text-xl font-extralight">Top Contributions</p>
          </div>
          <div className="flex flex-row md:mt-8 mt-5 items-center">
            <div className="md:w-16 w-10 md:h-16 h-10 rounded-full bg-yellow-300 md:ml-16 ml-12 flex items-center justify-center">
              <p className="text-white md:text-3xl text-xl">1</p>
            </div>
            <div className="flex flex-col md:ml-10 ml-5">
              <div className="flex flex-row items-center">
                <p className="text-gray-600 font-extralight md:text-xl text-md">Funded:</p>
                <p className="text-gray-600 font-regular md:text-xl text-md ml-2">10.0 NEARs</p>
              </div>
              <div className="flex flex-row items-center">
                <p className="text-gray-600 font-extralight md:text-xl text-md"> Recipient:</p>
                <p className="text-gray-600 font-regular md:text-xl text-md ml-2">lexdev.testnet</p>
              </div>
              <div className="flex flex-row items-center">
                <p className="text-gray-600 font-extralight md:text-xl text-md"> Date:</p>
                <p className="text-gray-600 font-regular md:text-xl text-md ml-2">03/15/2022</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:mt-8 mt-5 items-center">
            <div className="md:w-16 w-10 md:h-16 h-10 rounded-full bg-yellow-300 md:ml-16 ml-12 flex items-center justify-center">
              <p className="text-white md:text-3xl text-xl">2</p>
            </div>
            <div className="flex flex-col md:ml-10 ml-5">
              <div className="flex flex-row items-center">
                <p className="text-gray-600 font-extralight md:text-xl text-md">Funded:</p>
                <p className="text-gray-600 font-regular md:text-xl text-md ml-2">10.0 NEARs</p>
              </div>
              <div className="flex flex-row items-center">
                <p className="text-gray-600 font-extralight md:text-xl text-md"> Recipient:</p>
                <p className="text-gray-600 font-regular md:text-xl text-md ml-2">lexdev.testnet</p>
              </div>
              <div className="flex flex-row items-center">
                <p className="text-gray-600 font-extralight md:text-xl text-md"> Date:</p>
                <p className="text-gray-600 font-regular md:text-xl text-md ml-2">03/15/2022</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:mt-8 mt-5 items-center">
            <div className="md:w-16 w-10 md:h-16 h-10 rounded-full bg-yellow-300 md:ml-16 ml-12 flex items-center justify-center">
              <p className="text-white md:text-3xl text-xl">3</p>
            </div>
            <div className="flex flex-col md:ml-10 ml-5">
              <div className="flex flex-row items-center">
                <p className="text-gray-600 font-extralight md:text-xl text-md">Funded:</p>
                <p className="text-gray-600 font-regular md:text-xl text-md ml-2">10.0 NEARs</p>
              </div>
              <div className="flex flex-row items-center">
                <p className="text-gray-600 font-extralight md:text-xl text-md"> Recipient:</p>
                <p className="text-gray-600 font-regular md:text-xl text-md ml-2">lexdev.testnet</p>
              </div>
              <div className="flex flex-row items-center">
                <p className="text-gray-600 font-extralight md:text-xl text-md"> Date:</p>
                <p className="text-gray-600 font-regular md:text-xl text-md ml-2">03/15/2022</p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
