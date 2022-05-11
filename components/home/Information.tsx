/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Information() {
  return(
    <div className="w-full md:h-screen h-[400px] bg-white flex items-center justify-center">
      <img className="hidden lg:block w-full" src="curve.png" alt="curve" />
      <div className="flex absolute w-full md:h-screen h-[100px] items-start justify-center mt-60">
        <p className="font-display-300 text-blue-700 font-extralight text-3xl">Help students fund their academic goals</p>
      </div>
      <div className="flex md:flex-row flex-col absolute w-full h-screen items-center justify-center mt-32 md:gap-x-20">
        <div className="flex flex-row gap-x-20">
          <div className="w-72 h-96 drop-shadow-3xl bg-white rounded-lg flex flex-col items-center">
            <img alt="easy" className="mt-10 w-24" src="easy.svg" />
          </div>
          <div className="w-72 h-96 drop-shadow-3xl bg-white rounded-lg flex flex-col items-center">
            <img alt="easy" className="mt-10 w-32" src="rewards.svg" />
          </div>
        </div>
        <div className="w-72 h-96 drop-shadow-3xl bg-white rounded-lg flex flex-col items-center">
            <img alt="easy" className="mt-10 w-24" src="audit.svg" />
          </div>
      </div>
    </div>
  )
}