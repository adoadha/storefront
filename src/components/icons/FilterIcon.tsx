import React from "react";

type IconProps = {
  className: string;
};

const FilterIcon = ({ className }: IconProps) => {
  return (
    <>
      <svg
        width="18"
        height="12"
        className={className}
        viewBox="0 0 18 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 12H11V10H7V12ZM0 0V2H18V0H0ZM3 7H15V5H3V7Z"
          fill="#163A50"
        />
      </svg>
    </>
  );
};

export default FilterIcon;
