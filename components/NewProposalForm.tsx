/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PlusIcon from './icons/PlusIcon';
import { useRouter } from 'next/router';

function NewProposalForm() {
  const [firstPart, setFirstPart] = React.useState(true);
  const [secondPart, setSecondPart] = React.useState(false);
  const [thirdPart, setThirdPart] = React.useState(false);
  const router = useRouter();
  return (
    <div className="w-full h-full">
      { firstPart ? (
      <><div className="absolute w-full h-full flex items-end justify-end">
          <img src="astronaut.svg" alt="bg" className="h-[350px] -mr-60 opacity-70 absolute" />
        </div><div className="relative w-full h-full flex justify-center items-center">
            <div className=" w-8/12 h-5/6 bg-white drop-shadow-3xl rounded-xl flex flex-col p-5">
              <div className="flex flex-row">
                <div className="w-1/2 flex justify-start">
                  <p className="text-blue-700 text-3xl font-semibold">Create Proposal</p>
                </div>
                <div className="w-1/2 flex justify-end">
                  <p className="text-yellow-300 text-lg font-light">1/3</p>
                </div>
              </div>
              <p className="text-gray-200 font-extralight">Enter the corresponding data to create your proposal. Use real data to provide credibility to your proposal.</p>
              <label className="flex flex-col items-start mt-5 md:text-base text-xs text-start text-blue-800 gap-y-2">
                <span>Proposal Name</span>
                <input
                  className="w-full md:h-12 h-10  bg-gray-300 rounded-lg outline-none pl-2"
                  type="text"
                  required />
              </label>
              <div className="flex flex-row w-full gap-x-10">
                <label className="flex flex-col items-start mt-5 md:text-base text-xs text-start text-blue-800 gap-y-2 w-1/2">
                  <span>Academic Goal</span>
                  <select
                    className="w-full md:h-12 h-10  bg-gray-300 rounded-lg outline-none pr-2"
                    required
                  >
                    <option value={"hey"} />
                    <option value={"hey"} />
                    <option value={"hey"} />
                  </select>
                </label>
                <label className="flex flex-col items-start mt-5 md:text-base text-xs text-start text-blue-800 gap-y-2 w-1/2">
                  <span>Link to Institute`s Website</span>
                  <input
                    className="w-full md:h-12 h-10  bg-gray-300 rounded-lg outline-none pl-2"
                    type="text"
                    required />
                </label>
              </div>
              <label className="flex flex-col items-start mt-5 md:text-base text-xs text-start text-blue-800 gap-y-2 w-1/2">
                <span>Link to PENSUM</span>
                <input
                  className="w-full md:h-12 h-10  bg-gray-300 rounded-lg outline-none pl-2"
                  type="text"
                  required />
              </label>
              <button type="button" className="w-full h-14 mt-8 bg-blue-300 text-white rounded-xl drop-shadow-3xl hover:bg-blue-700" onClick={(e)=> {e.preventDefault(); setSecondPart(true); setFirstPart(false);}}>Next</button>
            </div>
          </div></>) : (secondPart ? (<>
          <div className="absolute w-full h-full flex items-end justify-end">
          <img src="rocket.svg" alt="bg" className="h-[500px] -mr-32 opacity-70 absolute" />
        </div><div className="relative w-full h-full flex justify-center items-center">
            <div className=" w-8/12 h-5/6 bg-white drop-shadow-3xl rounded-xl flex flex-col p-5">
              <div className="flex flex-row">
                <div className="w-1/2 flex justify-start">
                  <p className="text-blue-700 text-3xl font-semibold">Time & Description</p>
                </div>
                <div className="w-1/2 flex justify-end">
                  <p className="text-yellow-300 text-lg font-light">2/3</p>
                </div>
              </div>
              <div className="flex flex-row gap-x-5 w-full">
                <label className="flex flex-col items-start mt-5 md:text-base text-xs text-start text-blue-800 gap-y-2 w-3/5">
                  <span>Time of Academic Activity</span>
                  <div className="flex flex-row w-full gap-x-5">
                    <input
                      className="w-full md:h-12 h-10  bg-gray-300 rounded-lg outline-none pl-2"
                      type="date"
                      required />
                      <input
                      className="w-full md:h-12 h-10  bg-gray-300 rounded-lg outline-none pl-2"
                      type="date"
                      required />
                  </div>
                </label>
                <label className="flex flex-col items-start mt-5 md:text-base text-xs text-start text-blue-800 gap-y-2 w-1/3">
                  <span>Proposal Duration</span>
                  <select
                    className="w-full md:h-12 h-10  bg-gray-300 rounded-lg outline-none pr-2"
                    required
                  >
                    <option value={"hey"} />
                    <option value={"hey"} />
                    <option value={"hey"} />
                  </select>
                </label>
              </div>
                <label className="flex flex-col items-start mt-5 md:text-base text-xs text-start text-blue-800 gap-y-2 w-full">
                  <span>Explain Why You Need the Funds</span>
                  <textarea
                    className="w-full md:h-40 h-10  bg-gray-300 rounded-lg outline-none p-3"
                    required />
                </label>
              <button type="button" className="w-full h-14 mt-8 bg-blue-300 text-white rounded-xl drop-shadow-3xl hover:bg-blue-700" onClick={(e)=> {e.preventDefault(); setSecondPart(false); setFirstPart(false); setThirdPart(true);}}>Next</button>
            </div>
          </div>
          </>):(thirdPart ? (<><div className="absolute w-full h-full flex items-end justify-end">
            <img src="telescope.svg" alt="bg" className="h-60 mr-5 opacity-70 absolute" />
          </div><div className="relative w-full h-full flex justify-center items-center">
              <div className=" w-8/12 h-5/6 bg-white drop-shadow-3xl rounded-xl flex flex-col p-5">
                <div className="h-4/5">
                <div className="flex flex-row">
                  <div className="w-1/2 flex justify-start">
                    <p className="text-blue-700 text-3xl font-semibold">Add Photos</p>
                  </div>
                  <div className="w-1/2 flex justify-end">
                    <p className="text-yellow-300 text-lg font-light">3/3</p>
                  </div>
                </div>
                <p className="text-gray-200 font-extralight pb-8">Add photos to create your proposal. Use real photos to provide credibility to your proposal.</p>
                <input type="file" id="upload" hidden />
                <label htmlFor="upload" className="w-32 h-32 bg-white drop-shadow-3xl rounded-xl flex justify-center items-center cursor-pointer text-blue-700 hover:text-blue-300"> 
                  <PlusIcon className="w-16" />
                </label>
                </div>
                <div className="flex items-end">
                  <button type="button" className="w-full h-14 mt-8 bg-blue-300 text-white rounded-xl drop-shadow-3xl hover:bg-blue-700" onClick={(e)=> {e.preventDefault(); router.push("/proposals");}}>Create</button>
                </div>
              </div>
            </div></>
          ): (null)))
    }
    </div>
  );
}

export default NewProposalForm;