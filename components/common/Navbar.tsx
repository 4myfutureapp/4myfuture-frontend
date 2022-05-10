/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Navbar() {
  return (
    <div className="bg-white bg-opacity-20 flex flex-row md:h-24 h-20 w-full items-center">
      <img src="blue-logo.svg" className="md:ml-16 ml-5 md:w-48 w-36" alt="logo" />
      <div className="w-full flex justify-end items-center">
        <button 
        className="bg-blue-700 md:w-32 w-24 md:h-12 h-10 rounded-lg md:mr-16 mr-5 text-white font-display-400 text-lg hover:text-blue-700 hover:bg-white"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;