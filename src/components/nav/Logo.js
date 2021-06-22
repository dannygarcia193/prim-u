import React from "react";
const Logo = ({ className, fill, fill2, fill3 }) => {
  return (
    <svg
      className={className}
      width="32"
      height="51"
      viewBox="0 0 32 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 51C28 37 32 22.5 32 16.5C31.5 5.5 23 0 16 0L16 9C19.866 9 23 12.134 23 16C23 19.866 19.866 23 16 23L16 51Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 51C4 37 0 22.5 0 16.5C0.5 5.5 9 0 16 0L16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23L16 51Z"
        fill={fill2}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM16 23C19.866 23 23 19.866 23 16C23 12.134 19.866 9 16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23Z"
        fill={fill3}
      />
    </svg>
  );
};

export default Logo;
