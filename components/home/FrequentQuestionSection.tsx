import React from 'react';
import Link from 'next/link';
import Fade from 'react-reveal';
import messages from './messages.json'

export default function FrequentQuestionSection({lang}) {
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState('');
  const textReturn = (lang, value) =>{
    var results = [];
    if(lang == 'en'){
    results.push(messages.en[0][value]);
    }else {  
    results.push(messages.es[0][value]);
    }
    return results.toString();    
  }

  //question answers

  return (
    <div className={` ${open ? 'md:h-[500px] h-[400px]': 'md:h-[500px] h-[300px]'}  w-full flex flex-col items-center justify-center`}>
      <p className="text-blue-700 font-extralight md:text-4xl text-2xl">{textReturn(lang,'FAQ')}</p>
      <div className="flex flex-row md:gap-x-20 gap-x-5 md:mt-20 mt-10">
        <Fade left>
          <ul className="text-gray-500 underline list-disc md:text-xl text-xs cursor-pointer font-light md:ml-0 ml-5 flex flex-col ">
            <button className="underline font-light flex justify-start text-left" onClick={()=>{setOpen(true); setText(textReturn(lang,'A1'))}}><li>{textReturn(lang,'Q1')}</li></button>
            <button className="underline font-light flex justify-start text-left" onClick={()=>{setOpen(true); setText(textReturn(lang,'A2'))}}><li>{textReturn(lang,'Q2')}</li></button>
            <button className="underline font-light flex justify-start text-left" onClick={()=>{setOpen(true); setText(textReturn(lang,'A3'))}}><li>{textReturn(lang,'Q3')}</li></button>
            <button className="underline font-light flex justify-start text-left" onClick={()=>{setOpen(true); setText(textReturn(lang,'A4'))}}><li>{textReturn(lang,'Q4')}</li></button>
            <button className="underline font-light flex justify-start text-left" onClick={()=>{setOpen(true); setText(textReturn(lang,'A5'))}}><li>{textReturn(lang,'Q5')}</li></button>
          </ul>
        </Fade>
        <Fade right>
          <ul className="text-gray-500 underline list-disc md:text-xl text-xs cursor-pointer font-light">
            <button className="underline font-light flex justify-start text-left" onClick={()=>{setOpen(true); setText(textReturn(lang,'A6'))}}><li>{textReturn(lang,'Q6')}</li></button>
            <button className="underline font-light flex justify-start text-left" onClick={()=>{setOpen(true); setText(textReturn(lang,'A7'))}}><li>{textReturn(lang,'Q7')}</li></button>
            <button className="underline font-light flex justify-start text-left" onClick={()=>{setOpen(true); setText(textReturn(lang,'A8'))}}><li>{textReturn(lang,'Q8')}</li></button>
            <button className="underline font-light flex justify-start text-left" onClick={()=>{setOpen(true); setText(textReturn(lang,'A9'))}}><li>{textReturn(lang,'Q9')}</li></button>
          </ul>
        </Fade>
      </div>
      {
        open ? (
          <Fade bottom>
            <div className="md:h-32 h-28 md:w-5/12 w-10/12 border-blue-300 border-2 rounded-xl drop-shadow-3xl mt-7 p-5 flex items-center">
              <p className="font-extralight text-blue-700 md:text-base text-sm">{text}</p>
            </div>
          </Fade>
        ):(null)
      }
    </div>
  );
}
