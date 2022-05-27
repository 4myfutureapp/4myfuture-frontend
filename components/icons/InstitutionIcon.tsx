import React from 'react';

function InstitutionIcon({className, ...props}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill="currentColor"
        stroke="#fff"
        strokeWidth="0.8"
        d="M45.6 18.238V33.6h-3.2V19.523l-.593.326-4 2.2-.207.114v11.999L24 41.545l-13.6-7.383V22.164l-.207-.115-7.36-4.047L24 6.456l21.6 11.782zm-21.79 7.514l.19.103.19-.103 13.7-7.4.652-.352-.652-.352-13.7-7.4-.19-.103-.19.103-13.7 7.4-.652.352.652.352 13.7 7.4zm0 12.05l.19.103.19-.103 10-5.4.21-.113v-8.466l-.593.326L24 29.544l-9.807-5.395-.593-.326V32.29l.21.113 10 5.4z"
      ></path>
    </svg>
  );
}

export default InstitutionIcon;