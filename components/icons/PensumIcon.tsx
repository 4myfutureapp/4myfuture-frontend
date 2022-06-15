import React from 'react';

function PensumIcon({className, ...props}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
      fill="none"
      viewBox="0 0 48 48"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M35 40a5 5 0 100-10 5 5 0 000 10zm0 2a7 7 0 100-14 7 7 0 000 14z"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M35 31.5a1 1 0 011 1v2.086l.707.707a1 1 0 01-1.414 1.414L34 35.414V32.5a1 1 0 011-1zM14 23h-2v2h2v-2zm-2-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2zm10 2h-2v2h2v-2zm-2-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2zm10 2h-2v2h2v-2zm-2-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2zM14 31h-2v2h2v-2zm-2-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2zm10 2h-2v2h2v-2zm-2-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2z"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 12a1 1 0 011-1h5V9H9a3 3 0 00-3 3v24a3 3 0 003 3h20.255a6.972 6.972 0 01-.965-2H9a1 1 0 01-1-1V12zm26 16.07a7.06 7.06 0 012 0V12a3 3 0 00-3-3h-3v2h3a1 1 0 011 1v16.07zM16 11h10.563V9H16v2z"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M36 18H8v-2h28v2z"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        d="M12 7a1 1 0 012 0v5a1 1 0 01-2 0V7zm14 0a1 1 0 012 0v5a1 1 0 01-2 0V7z"
      ></path>
    </svg>
  );
}

export default PensumIcon;