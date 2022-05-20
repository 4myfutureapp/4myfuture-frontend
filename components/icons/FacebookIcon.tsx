import React from 'react';

function FacebookIcon({className, ...props}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
      fill="none"
      viewBox="0 0 62 62"
    >
      <g clipPath="url(#clip0_134_82)">
        <path
          fill="currentColor"
          d="M26.183 48.705V31.972h-4.44v-6.024h4.44v-5.146c0-4.043 2.623-7.756 8.667-7.756 2.447 0 4.257.234 4.257.234l-.143 5.625s-1.845-.018-3.859-.018c-2.18 0-2.529 1.001-2.529 2.662v4.4h6.562l-.286 6.023h-6.276v16.733h-6.393z"
        ></path>
      </g>
      <circle
        cx="30.875"
        cy="30.875"
        r="28.875"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <defs>
        <clipPath id="clip0_134_82">
          <path
            fill="currentColor"
            d="M0 0H17.394V35.659H0z"
            transform="translate(21.743 13.046)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default FacebookIcon;