import React from 'react';
import Link from 'next/link';

export default function FrequentQuestionSection() {
  return (
    <div className="w-full md:h-[500px] h-[300px] flex flex-col items-center justify-center">
      <p className="text-blue-700 font-extralight md:text-4xl text-2xl">Frequently Asked Questions</p>
      <div className="flex flex-row md:gap-x-20 gap-x-10 md:mt-20 mt-10">
        <ul className="text-gray-500 underline list-disc md:text-xl text-sm cursor-pointer font-light">
          <Link href="/"><li>this is question number 1?</li></Link>
          <Link href="/"><li>this is question number 2?</li></Link>
          <Link href="/"><li>this is question number 3?</li></Link>
          <Link href="/"><li>this is question number 4?</li></Link>
        </ul>
        <ul className="text-gray-500 underline list-disc md:text-xl text-sm cursor-pointer font-light">
          <Link href="/"><li>this is question number 5?</li></Link>
          <Link href="/"><li>this is question number 6?</li></Link>
          <Link href="/"><li>this is question number 7?</li></Link>
          <Link href="/"><li>this is question number 8?</li></Link>
        </ul>

      </div>
    </div>
  );
}
