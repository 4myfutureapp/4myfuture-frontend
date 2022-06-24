
import React from 'react';
import EmailIcon from '../icons/EmailIcon';
import InstagramIcon from '../icons/InstagramIcon';
import TwitterIcon from '../icons/TwitterIcon';
import Link from 'next/link';
import messages from '../home/messages.json'

export default function Footer({lang}) {
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
    <div className="w-full h-60 bg-blue-700 flex flex-row justify-evenly items-center relative">
      <div className="hidden lg:block w-80 h-full">
        <img className="hidden lg:block w-48 ml-10 pt-10 " src="white-logo.svg" alt="logo" />
      </div>
      <div className="md:w-80 w-32 h-40 flex flex-col justify-center">
        <p className="text-white font-semibold md:text-xl text-md mb-2">{textReturn(lang,'Contact')}</p>
        <div className="flex flex-row items-center">
          <EmailIcon className="md:w-5 w-3 text-white" />
          <Link href="mailto:info@4myfuture.com"> 
            <p className="text-white md:text-base text-sm font-extralight md:ml-2 ml-1 cursor-pointer hover:underline">info@4myfuture.com</p>
          </Link>
        </div>
      </div>
      <div className="md:w-80 w-32 h-40 flex flex-col justify-center">
        <p className="text-white font-semibold md:text-xl text-md mb-2">{textReturn(lang,'Info')}</p>
        <Link href="/">
          <p className="text-white font-extralight cursor-pointer hover:underline md:text-base text-sm"> {textReturn(lang,'Terms')}</p>
        </Link>
       
          <p className="text-white font-extralight md:text-base text-sm">4myfuture LLC
          1201 N. Orange Street
          Suite 7160
          Wilmington
          19801 Delaware
</p>
       
      </div>
      <div className="hidden lg:block md:w-80 w-20 h-40 md:flex flex-col justify-center">
        <p className="text-white font-semibold text-xl mb-2"> {textReturn(lang,'Follow')}</p>
        <div className="flex flex-row gap-x-3">
          <button className="w-10 h-10"><a href={"https://www.instagram.com/4myfutureapp/"} target="_blank"><InstagramIcon className="text-white hover:text-blue-100" /></a> </button>
          <button className="w-10 h-10"><a href='https://twitter.com/4myfutureapp' target="_blank"><TwitterIcon className="text-white hover:text-blue-100"/> </a> </button>
        </div>

         <p className="text-white mb-5 text-xs mr-20 mt-20">4MyFutureDApp - Near Protocol 2022</p>
      </div>
     
    </div>
  )
}
