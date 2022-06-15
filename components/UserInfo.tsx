/* eslint-disable @next/next/no-img-element */
import React from 'react';

function UserInfo() {
  return (
    <div className="flex md:flex-row flex-col w-full md:items-none items-center">
      <div className="md:w-3/12 w-10/12 md:h-[400px] h-52 bg-white rounded-2xl drop-shadow-3xl md:ml-16 ml-0 md:mt-10 mt-5 flex flex-col items-center">
        <div className="flex md:flex-col flex-row items-center gap-x-4">
          <div className="md:w-40 md:h-40 w-20 h-20 flex md:justify-center justify-start items-center overflow-clip rounded-full mt-10">
            <img alt="user-pic" className="w-full h-full object-cover" src="edward.jpeg" />
          </div>
          <div className="flex flex-col items-center">
            <p className="md:text-4xl text-xl font-bold text-blue-800 mt-5">Edward Vergel</p>
            <p className="md:text-xl text-md font-bold text-blue-600 mt-2">30.4 NEARs</p>
          </div>
        </div>
        <button className="bg-blue-800 text-white hover:bg-blue-400 text-xl rounded mt-5 md:p-4 p-2 md:w-8/12 w-10/12">Logout</button>
      </div>
      <div className="md:w-7/12 w-11/12 md:h-[600px] h-[700px] md:bg-white bg-none rounded-2xl md:drop-shadow-3xl drop-shadow-none md:mt-10 mt-5 md:ml-16 ml-0 flex flex-col md:mb-0">
        <p className="md:mt-10 mt-2 ml-10 md:text-2xl text-xl text-blue-300 font-bold">Account Information</p>
        <div className="flex md:flex-row flex-col gap-x-10 mt-2">
          <label className="flex flex-col items-start mt-5 md:text-base text-xs text-start text-blue-800 gap-y-2 pl-10 md:pr-0 pr-10 md:w-1/2 w-full">
            <span>Username</span>
            <input
              className="w-full md:h-12 h-10  bg-gray-300 rounded-lg outline-none pl-2"
              type="text"
              required 
            />
          </label>
          <label className="flex flex-col items-start mt-5 md:text-base text-xs text-start text-blue-800 gap-y-2 pr-10 md:pl-0 pl-10 md:w-1/2 w-full">
            <span>Email</span>
            <input
              className="w-full md:h-12 h-10  bg-gray-300 rounded-lg outline-none pl-2"
              type="text"
              required 
            />
          </label>
        </div>
        <div className="flex flex-row md:gap-x-10 gap-x-4 mt-2">
          <label className="flex flex-col items-start mt-5 md:text-base text-xs text-start text-blue-800 gap-y-2 pl-10 w-1/2">
            <span>First Name</span>
            <input
              className="w-full md:h-12 h-10  bg-gray-300 rounded-lg outline-none pl-2"
              type="text"
              required 
            />
          </label>
          <label className="flex flex-col items-start mt-5 md:text-base text-xs text-start text-blue-800 gap-y-2 pr-10 w-1/2">
            <span>Last Name</span>
            <input
              className="w-full md:h-12 h-10  bg-gray-300 rounded-lg outline-none pl-2"
              type="text"
              required 
            />
          </label>
        </div>
        <p className="mt-10 ml-10 text-2xl text-blue-300 font-bold">Change Password</p>
        <div className="flex md:flex-row flex-col gap-x-10 mt-2">
          <label className="flex flex-col items-start mt-5 md:text-base text-xs text-start text-blue-800 gap-y-2 pl-10 md:pr-0 pr-10 md:w-1/2 w-full">
            <span>Password</span>
            <input
              className="w-full md:h-12 h-10  bg-gray-300 rounded-lg outline-none pl-2"
              type="text"
              required 
            />
          </label>
          <label className="flex flex-col items-start mt-5 md:text-base text-xs text-start text-blue-800 gap-y-2 pr-10 md:pl-0 pl-10 md:w-1/2 w-full">
            <span>Confirm Password</span>
            <input
              className="w-full md:h-12 h-10  bg-gray-300 rounded-lg outline-none pl-2"
              type="text"
              required 
            />
          </label>
        </div>
        <div className="w-full px-10 mt-10 flex md:justify-end justify-center">
          <button className="bg-blue-300 text-white md:w-40 w-11/12 p-4 rounded-xl hover:bg-blue-800">Update</button>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;