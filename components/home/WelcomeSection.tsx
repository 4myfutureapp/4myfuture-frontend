/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Fade from 'react-reveal';
import { useRouter } from 'next/router';
import messages from './messages.json'


export default function WelcomeSection({lang}) {
  const router = useRouter();
  const [language, setLanguage] = React.useState('');
 
  const textReturn = (lang, value) =>{
    var results = [];
    if(lang == 'en'){
    results.push(messages.en[0][value]);
    }else {  
    results.push(messages.es[0][value]);
    }
    return results    
  }

  return (
    <div className="w-full md:h-[620px] h-[250px] flex flex-row item-center mb-14">
      <Fade left>
        <div className="flex flex-col justify-center z-10 md:-mt-0 -mt-10">
          <div className="flex flex-row items-center md:ml-20 ml-10">
            <p className="text-blue-700 font-display-400 font-light md:text-6xl text-2xl">{textReturn(lang,'Help')}</p>
            <p className="text-yellow-300 font-display-500 font-regular md:text-7xl text-3xl md:ml-5 ml-3">{textReturn(lang,'Students')}</p>
          </div>
          <div className="flex flex-row items-center md:ml-20 ml-10">
            <p className="text-blue-700 font-display-400 font-light md:text-6xl text-2xl md:w-[510px] w-[210px]"> {textReturn(lang,'Reach')}</p>
          </div>
          <button 
            className="font-display-200 md:h-14 h-8 md:w-60 w-32 md:ml-20 ml-10 bg-gradient-to-b from-blue-700 to-blue-100 md:rounded-xl rounded-md text-white md:text-xl text-md font-light md:mt-16 mt-5 shadow-2xl drop-shadow-3xl"
            //onClick={()=> router.push("/proposals")}
            disabled={true}
          >
            {textReturn(lang,'Comming')}
          </button>
        </div>
      </Fade>
      <Fade right>
        <div className="flex w-full md:h-[650px] h-[220px] items-center justify-end absolute md:ml-0 ml-10 mt-4">
          <img alt="rocket" src="rocket.svg" className="flex md:w-3/6 w-[270px]" />
        </div>
      </Fade>
      {/* <div className="absolute w-full h-full flex justify-end items-end flex-row gap-x-2 md:p-7 p-4">
        <button className="md:text-xl text-sm font-bold text-blue-700 hover:text-blue-300"  onClick={() => setLanguage('en')}>EN</button>
        <p className="md:text-xl text-sm text-blue-700">/</p>
        <button className="md:text-xl text-sm font-light text-blue-700 hover:text-blue-300" onClick={() => setLanguage('es')}>ES</button>
      </div> */}
     
    </div>
   
  )
}