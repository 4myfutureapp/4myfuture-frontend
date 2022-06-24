/* eslint-disable @next/next/no-img-element */
import React from 'react';
import GitHubIcon from '../icons/GitHubIcon';
import LinkedinIcon from '../icons/LinkedinIcon'
import Flip from 'react-reveal';
import SimpleTwitterIcon from '../icons/SimpleTwitterIcon';

interface TeamCardProps {
  name: string;
  job: string;
  description: string;
  img: string;
  linkedin: string;
  git: string;
  twitter: string;
}

export default function TeamCard({name, job, description, img, linkedin, git, twitter}: TeamCardProps) {
  const [hover, setHover] = React.useState(true);
  return (
    <div onMouseOver={()=>{setHover(false)}} onMouseOut={()=>{setHover(true)}} className="md:w-80 w-40 md:h-96 h-52 drop-shadow-3xl flex flex-col items-center bg-white rounded-xl overflow-y-clip m-3">
      {hover ? (
      <div className="md:w-80 w-40 md:h-96 h-52 flex flex-col items-center">
        <div className="w-full md:h-80 h-40 flex items-center justify-center overflow-clip">
          <img alt="teammate" src={img} className="object-cover w-full h-full" />
        </div>
        <div className="flex flex-col justify-center items-center md:p-1 p-[1px]">
          <p className="text-blue-700 md:text-3xl text-lg font-light">{name}</p>
          <p className="text-blue-700 md:text-2xl text-md font-extralight">{job}</p>
        </div>
      </div>
      ) : (
      <Flip left>
        <div className="md:w-80 w-40 md:h-96 h-52 flex flex-col items-center">
          <div className="w-full md:h-60 h-32 flex items-end justify-center">
            <p className="text-blue-700 md:text-xl text-sm font-regular text-center md:w-60 w-40">{description}</p>
          </div>
          <div className="w-full md:h-36 h-20 flex flex-row items-end gap-x-10 justify-center">
            <a href={linkedin} target="_blank" rel="noreferrer" ><LinkedinIcon className="md:w-10 w-5 text-blue-500 hover:text-blue-700 mb-5 cursor-pointer" /></a>
            <a href={git} target="_blank" rel="noreferrer"><GitHubIcon className="md:w-10 w-5 text-blue-500 hover:text-blue-700 mb-5 cursor-pointer" /></a>
            <a href={git} target="_blank" rel="noreferrer"><SimpleTwitterIcon href={twitter} className="md:w-10 w-5 text-blue-500 hover:text-blue-700 mb-5 cursor-pointer"/></a>
          </div>
        </div>
      </Flip>
      )}
    </div>
  );
}
