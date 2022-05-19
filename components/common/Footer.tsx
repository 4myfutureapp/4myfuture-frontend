/* eslint-disable @next/next/no-img-element */
import React from 'react';
import EmailIcon from '../icons/EmailIcon';
import PhoneIcon from '../icons/PhoneIcon';
import FacebookIcon from '../icons/FacebookIcon';
import InstagramIcon from '../icons/InstagramIcon';
import TwitterIcon from '../icons/TwitterIcon';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="w-full h-60 bg-blue-700 flex flex-row justify-evenly items-center relative">
      <div className="w-80 h-full">
        <img className="hidden lg:block w-48 ml-10 pt-10 " src="white-logo.svg" alt="logo" />
      </div>
      <div className="w-80 h-40 flex flex-col justify-center">
        <p className="text-white font-semibold text-xl mb-2">Contact:</p>
        <div className="flex flex-row items-center">
          <EmailIcon className="w-5 text-white" />
          <Link href="/">
            <p className="text-white font-extralight ml-2 cursor-pointer hover:underline">info@4myfuture.com</p>
          </Link>
        </div>
        <div className="flex flex-row items-center">
          <PhoneIcon className="w-5 text-white" />
          <Link href="/">
            <p className="text-white font-extralight ml-2 cursor-pointer mt-2 hover:underline">+1 000 000000</p>
          </Link>
        </div>
      </div>
      <div className="w-80 h-40 flex flex-col justify-center">
        <p className="text-white font-semibold text-xl mb-2">Information:</p>
        <Link href="/">
          <p className="text-white font-extralight cursor-pointer hover:underline">Terms & Conditions</p>
        </Link>
        <Link href="/">
          <p className="text-white font-extralight cursor-pointer hover:underline">Privacy Policy</p>
        </Link>
      </div>
      <div className="w-80 h-40 flex flex-col justify-center">
        <p className="text-white font-semibold text-xl mb-2">Follow Us:</p>
        <div className="flex flex-row gap-x-3">
          <button className="w-10 h-10"><FacebookIcon className="text-white hover:text-blue-100" /></button>
          <button className="w-10 h-10"><InstagramIcon className="text-white hover:text-blue-100" /></button>
          <button className="w-10 h-10"><TwitterIcon className="text-white hover:text-blue-100"/></button>
        </div>
      </div>
      <div className="w-full h-full absolute flex items-end justify-end">
        <p className="text-white mb-5 text-xs mr-20">4MyFutureDApp - Near Protocol 2022</p>
      </div>
    </div>
  )
}
