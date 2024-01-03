import React from "react";

type IconProps = {
  className: string;
};

const UpStatisticsIcon = ({ className }: IconProps) => {
  return (
    <>
      <svg
        width="14"
        height="7"
        className={className}
        viewBox="0 0 14 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.25 6.5L7 0.25L0.75 6.5L13.25 6.5Z" fill="#18781B" />
      </svg>
    </>
  );
};

export default UpStatisticsIcon;
