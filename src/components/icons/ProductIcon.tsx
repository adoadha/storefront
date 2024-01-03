import React from "react";

type IconProps = {
  className: string;
};

const ProductIcon = ({ className }: IconProps) => {
  return (
    <>
      <svg
        width="20"
        className={className}
        height="23"
        viewBox="0 0 20 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.25 0.90625L20 5.78125V17.9688L10.25 22.832L0.5 17.9688V5.78125L10.25 0.90625ZM17.5742 6.25L10.25 2.59375L7.42578 4L14.7031 7.67969L17.5742 6.25ZM10.25 9.90625L13.0391 8.52344L5.75 4.84375L2.92578 6.25L10.25 9.90625ZM2 7.46875V17.0312L9.5 20.7812V11.2188L2 7.46875ZM11 20.7812L18.5 17.0312V7.46875L11 11.2188V20.7812Z"
          fill="#45464E"
        />
      </svg>
    </>
  );
};

export default ProductIcon;
