import React from "react";

type IconProps = {
  className: string;
};

const DownStatisticsIcon = ({ className }: IconProps) => {
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
        <path
          d="M0.778694 0.429443L6.95753 6.74981L13.2779 0.570969L0.778694 0.429443Z"
          fill="#DF4D4D"
        />
      </svg>
    </>
  );
};

export default DownStatisticsIcon;
