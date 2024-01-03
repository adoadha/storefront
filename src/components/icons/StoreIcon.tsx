import React from "react";

type IconProps = {
  className: string;
};

const StoreIcon = ({ className }: IconProps) => {
  return (
    <>
      <svg
        width="18"
        height="17"
        viewBox="0 0 18 17"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.36 5.5L15.96 8.5H2.04L2.64 5.5H15.36ZM17 0.5H1V2.5H17V0.5ZM17 3.5H1L0 8.5V10.5H1V16.5H11V10.5H15V16.5H17V10.5H18V8.5L17 3.5ZM3 14.5V10.5H9V14.5H3Z"
          fill="#45464E"
        />
      </svg>
    </>
  );
};

export default StoreIcon;
