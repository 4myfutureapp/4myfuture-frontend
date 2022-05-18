import React from 'react';
import TeamCard from '../cards/TeamCard';
import Fade from 'react-reveal';

export default function TeamSection() {
  return (
    <div className="w-full md:h-screen h-[500px] flex flex-col justify-center items-center md:gap-y-20 gap-y-10">
      <p className="md:text-4xl text-2xl text-blue-700 font-extralight">Our Team</p>
      <div className="flex flex-row md:gap-x-10 gap-x-5">
        <TeamCard name="Edward Vergel" job="Developer" description="Co-creator of 4myfuture, Systems Engineering student, mobile application developer, Dapps developer" />
        <TeamCard name="Bladimir J. Aponte" job="Developer" description="Co-creator of 4myfuture, Systems Engineering student, mobile application developer, Dapps developer" />
      </div>
    </div>
  );
}
