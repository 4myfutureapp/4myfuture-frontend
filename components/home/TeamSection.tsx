import React from 'react';
import TeamCard from '../cards/TeamCard';
import messages from './messages.json'

export default function TeamSection({lang}) {
  const textReturn = (lang, value) =>{
    var results = [];
    if(lang == 'en'){
    results.push(messages.en[0][value]);
    }else {  
    results.push(messages.es[0][value]);
    }
    return results.toString()    
  }
  return (
    <div className="w-full md:h-screen h-[500px] flex flex-col justify-center items-center md:gap-y-20 gap-y-10">
      <p className="md:text-4xl text-2xl text-blue-700 font-extralight">{textReturn(lang,'Team')}</p>
      <div className="flex flex-row md:gap-x-10 gap-x-5 w-full overflow-x-scroll md:justify-center justify-none p-5">
        <TeamCard img="bladimir.jpeg" name="Bladimir J. Aponte" job={textReturn(lang,'Cofounder')} description={textReturn(lang,'DescriptionBladimir')} linkedin={'https://www.linkedin.com/in/bladimir-aponte-sarria/'} git={'https://github.com/blad1mir'} twitter={''} />
        <TeamCard img="edward.jpeg" name="Edward Vergel" job={textReturn(lang,'Cofounder')} description={textReturn(lang,'DescriptionEdward')} linkedin={'https://www.linkedin.com/in/edward-vergel-829797219'} git={'https://github.com/EdwardsVO'} twitter={'https://twitter.com/edwardss_dev'} />
        <TeamCard img="ana.png" name={'Ana Iturbe'} job={textReturn(lang,'Frontend')} description={textReturn(lang,'DescriptionAna')} linkedin={'https://www.linkedin.com/in/ana-iturbe-416b95217'} git={'https://github.com/anaiturbec'} twitter={''} />
      </div>
    </div>
  );
}
