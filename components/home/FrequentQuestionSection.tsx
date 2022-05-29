import React from 'react';
import Link from 'next/link';
import Fade from 'react-reveal';

export default function FrequentQuestionSection() {
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState('');

  //question answers
  const q1 =  "R. The first crowdfunding crypto app made for students"
  const q2 = "R. You must create a wallet or login at https://wallet.near.org/ then complete your profile information"
  const q3 = "R. Only those that comply with the following requirements: have completed a  Near Certified Analyst (NCA) and are a part of one of the universities allied with the project"
  const q4 = "R. It's very simple, after registering you must complete the form to upload your proposal, where you must explain what your situation is and why you want to study"
  const q5 = "R. Promote your proposal in your social media and have patience"
  const q6 = "R. It's really easy! connect your Wallet, choose a proposal that catches your attention and press “contribute” with the amount of NEARs you want to collaborate"
  const q7 = "R. You will receive your funds in your NEAR Wallet as people contribute, then you will have the option to exchange your tokens for your local currency using exchanges such as Binance and NEARp2p"
  const q8 = "R. No, due to platform security the amount of proposals per Wallet is limited to one, which allows the possibility to focus all the resources to this proposal"
  const q9 = "R. The creators of the project will get in touch with you once you decide to create a proposal for a follow up on the progress"

  return (
    <div className={` ${open ? 'md:h-[500px] h-[400px]': 'md:h-[500px] h-[300px]'}  w-full flex flex-col items-center justify-center`}>
      <p className="text-blue-700 font-extralight md:text-4xl text-2xl">Frequently Asked Questions</p>
      <div className="flex flex-row md:gap-x-20 gap-x-5 md:mt-20 mt-10">
        <Fade left>
          <ul className="text-gray-500 underline list-disc md:text-xl text-xs cursor-pointer font-light md:ml-0 ml-5 flex flex-col ">
            <button className="underline font-light flex justify-start text-left" onClick={()=>{setOpen(true); setText(q1)}}><li>What is 4MyFuture?</li></button>
            <button className="underline font-light flex justify-start text-left" onClick={()=>{setOpen(true); setText(q2)}}><li>How do I Sign Up?</li></button>
            <button className="underline font-light flex justify-start text-left" onClick={()=>{setOpen(true); setText(q3)}}><li>Who can create a Proposal?</li></button>
            <button className="underline font-light flex justify-start text-left" onClick={()=>{setOpen(true); setText(q4)}}><li>What steps should I take to create a proposal?</li></button>
            <button className="underline font-light flex justify-start text-left" onClick={()=>{setOpen(true); setText(q9)}}><li>What should I do after receiving the funds?</li></button>
          </ul>
        </Fade>
        <Fade right>
          <ul className="text-gray-500 underline list-disc md:text-xl text-xs cursor-pointer font-light">
            <button className="underline font-light flex justify-start text-left" onClick={()=>{setOpen(true); setText(q5)}}><li>What is the next step after creating a proposal?</li></button>
            <button className="underline font-light flex justify-start text-left" onClick={()=>{setOpen(true); setText(q6)}}><li>How can I contribute?</li></button>
            <button className="underline font-light flex justify-start text-left" onClick={()=>{setOpen(true); setText(q7)}}><li>What are the steps to receive funds?</li></button>
            <button className="underline font-light flex justify-start text-left" onClick={()=>{setOpen(true); setText(q8)}}><li>Am I allowed to create multiple proposals?</li></button>
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
