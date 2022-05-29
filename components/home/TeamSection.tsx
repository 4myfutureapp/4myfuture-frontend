import React from 'react';
import TeamCard from '../cards/TeamCard';

export default function TeamSection() {
  return (
    <div className="w-full md:h-screen h-[500px] flex flex-col justify-center items-center md:gap-y-20 gap-y-10">
      <p className="md:text-4xl text-2xl text-blue-700 font-extralight">Our Team</p>
      <div className="flex flex-row md:gap-x-10 gap-x-5 w-full overflow-x-scroll md:justify-center justify-none p-5">
        <TeamCard img="bladimir.jpeg" name="Bladimir J. Aponte" job="Co-founder" description="Co-founder 4MyFuture, Mobile developer and Blockchain developer. Open Source and cripto enthusiast" linkedin={''} git={'https://github.com/blad1mir'} twitter={''} />
        <TeamCard img="edward.jpeg" name="Edward Vergel" job="Co-founder" description="Co-founder 4MyFuture, Full Stack and Blockchain developer. Open Source enthusiast. Visionary. Investor" linkedin={'https://www.linkedin.com/in/edward-vergel-829797219'} git={'https://github.com/EdwardsVO'} twitter={'https://twitter.com/edwardss_dev'} />
        <TeamCard img="ana.png" name={'Ana Iturbe'} job={'Fontend'} description={'Systems Engineering Student. Frontend Developer. UI/UX Designer'} linkedin={'https://www.linkedin.com/in/ana-iturbe-416b95217'} git={'https://github.com/anaiturbec'} twitter={''} />
      </div>
    </div>
  );
}
