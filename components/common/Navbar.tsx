/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Navbar() {
  return (
    <div className="bg-white bg-opacity-25 flex flex-row md:h-24 h-20 w-full items-center">
      <img src="blue-logo.svg" className="md:ml-16 ml-5 md:w-48 w-36" alt="logo" />
      <div className="w-full flex justify-end items-center">
        {/* <button 
        className="bg-blue-700 font-light md:w-32 w-24 md:h-12 h-9 md:rounded-lg rounded-md md:mr-16 mr-5 text-white font-display-400 md:text-lg text-md hover:text-blue-700 hover:bg-white drop-shadow-3xl"
        >
          Connect
        </button> */}
      </div>
    </div>
  );
}

export default Navbar;