/* eslint-disable react/display-name */
"use client";

import { cn } from "@/lib/utils";
import ExclamationTriangleIcon from "@heroicons/react/24/solid/ExclamationTriangleIcon";
import { TextInput } from "flowbite-react";
import * as React from "react";
import { ComponentProps } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type InputTextProps = {
  id: string;
  register?: UseFormRegisterReturn;
  errors?: {
    [x: string]: any;
  };
  label?: string;
  addon?: string;
  labelClassName?: string;
  placeholder?: string;
  type?: string;
  icon?: React.FC<ComponentProps<"svg">>;
  rightIcon?: React.FC<ComponentProps<"svg">>;
  inputClassName?: string;
  helperText?: string;
  helperTextClassName?: string;
  errorMessageClassName?: string;
  wrapperClassName?: string;
  sizing?: string;
  onEnter?: () => void;
} & React.ComponentPropsWithRef<"input">;

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      id,
      register,
      errors,
      sizing,
      label,
      labelClassName,
      placeholder,
      type = "text",
      icon,
      rightIcon,
      inputClassName,
      helperText,
      helperTextClassName,
      errorMessageClassName,
      wrapperClassName,
      onEnter,
      addon,
      ...rest
    },
    ref
  ) => {
    const hasError = register && typeof errors?.[register.name] === "object";
    const errMessage = register && errors?.[register.name]?.message;

    return (
      <div className={wrapperClassName}>
        <div className="block mb-2">
          <label htmlFor={id} className={cn("text-base", labelClassName)}>
            {label}
          </label>
        </div>
        <TextInput
          ref={ref}
          id={id}
          type={type}
          sizing={sizing}
          icon={icon}
          addon={addon}
          rightIcon={rightIcon}
          placeholder={placeholder}
          color={hasError ? "failure" : "gray"}
          theme={{
            field: {
              input: {
                base: cn(
                  "w-full rounded-xl bg-transparent shadow-none border border-[#DFDFDF] focus:border-ming focus:ring-1 focus:ring-ming",
                  inputClassName
                ),
              },
            },
          }}
          autoComplete="off"
          onBlur={(e) => register?.onBlur(e)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && typeof onEnter === "function") onEnter();
          }}
          onChange={(e) => register?.onChange(e)}
          {...register}
          {...rest}
          helperText={
            <>
              {!!errMessage && (
                <div
                  className={cn(
                    "flex items-center text-xs",
                    errorMessageClassName
                  )}
                >
                  <ExclamationTriangleIcon className="w-4 h-4 mr-2" />
                  {errMessage}
                </div>
              )}
            </>
          }
        />
        {!!helperText && (
          <span
            className={cn(
              "text-ming-500 mt-2 block text-xs",
              helperTextClassName
            )}
          >
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

export default InputText;
