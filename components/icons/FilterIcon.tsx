import React from 'react';

function FilterIcon({className, ...props}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
      fill="none"
      viewBox="0 0 22 22"
    >
      <path
        fill="currentColor"
        d="M20.968 0H1.032C.116 0-.346 1.111.303 1.76L8.25 9.708v8.854c0 .337.164.652.44.845l3.437 2.406c.678.475 1.623-.007 1.623-.845V9.708l7.947-7.948c.648-.647.189-1.76-.73-1.76z"
      ></path>
    </svg>
  );
}

export default FilterIcon;