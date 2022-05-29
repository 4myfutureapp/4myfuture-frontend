/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

interface AuthNavProps {
  user: string;
  nears: number;
}

function AuthNav({user, nears}: AuthNavProps) {
  return (
    <div className="bg-white bg-opacity-25 flex flex-row md:h-24 h-20 w-full items-center">
      <img src="blue-logo.svg" className="md:ml-16 ml-5 md:w-48 w-36" alt="logo" />
      <div className="w-full flex flex-row gap-x-10 justify-end items-center mr-20">
        <Link href="/proposals">
          <a className="text-blue-700 text-xl font-extralight hover:text-yellow-300">Home</a>
        </Link>
        <Link href="/contributions">
          <a className="text-blue-700 text-xl font-extralight hover:text-yellow-300">Contributions</a>
        </Link>
        <Link href="/new-proposal">
          <a className="text-blue-700 text-xl font-extralight hover:text-yellow-300">New Proposal</a>
        </Link> 
        <div className="w-40 h-10 rounded-xl flex flex-row items-center bg-gray-300">
          <div className="w-1/2 h-full flex items-center justify-center text-blue-300 font-semibold">
            <p>NEAR {nears}</p>
          </div>
          <button className="w-1/2 h-full bg-blue-300 rounded-xl text-white">{user}</button>
        </div>  
      </div>
    </div>
  );
}

export default AuthNav;