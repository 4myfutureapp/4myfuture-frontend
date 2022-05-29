import React from 'react';

function PlusIcon({className, ...props}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 54 52"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
        d="M28 26H2m26 26V26v26zm0-26V0v26zm0 0h26-26z"
      ></path>
    </svg>
  );
}

export default PlusIcon;