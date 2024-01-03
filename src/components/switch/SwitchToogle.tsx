import React from "react";

type ToggleProps = {
  onChange?: () => void;
  checked?: boolean;
};

const SwitchToogle: React.FC<ToggleProps> = ({ onChange, checked }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onChange}
        checked={checked}
      />
      <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[3px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-picton-blue peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none" />
    </label>
  );
};

export default SwitchToogle;
