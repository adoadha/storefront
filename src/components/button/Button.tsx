/* eslint-disable react/display-name */
import { cn } from "@/lib/utils";
import * as React from "react";
import { ImSpinner2 } from "react-icons/im";

enum ButtonVariant {
  "primary",
  "outline",
  "ghost",
  "light",
  "dark",
}

type ButtonProps = {
  isLoading?: boolean;
  isDarkBg?: boolean;
  variant?: keyof typeof ButtonVariant;
} & React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = "primary",
      isDarkBg = false,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={cn(
          "btn shadow-none",
          //#region  //*=========== Variants ===========
          [
            variant === "primary" && ["btn-primary"],
            variant === "outline" && [
              "text-black",
              "border border-secondary",
              "disabled:text-gray-20 hover:bg-ming-50 active:bg-ming-100 disabled:bg-ming-100",
              isDarkBg &&
                "hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800",
            ],
            variant === "ghost" && [
              "border-none text-primary",
              "shadow-none",
              "hover:bg-ming-50 active:bg-ming-100 disabled:bg-ming-100",
              isDarkBg &&
                "hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800",
            ],
            variant === "light" && [
              "text-dark bg-white ",
              "border border-gray-300",
              "hover:text-dark hover:bg-gray-100",
              "active:bg-white/80 disabled:bg-gray-200",
            ],
            variant === "dark" && [
              "bg-gray-900 text-white",
              "border border-gray-600",
              "hover:bg-gray-800 active:bg-gray-700 disabled:bg-gray-700",
            ],
          ],
          //#endregion  //*======== Variants ===========
          "disabled:cursor-not-allowed",
          isLoading &&
            "relative text-transparent transition-none hover:text-transparent disabled:cursor-wait",
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={cn(
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
              {
                "text-white": ["primary", "dark"].includes(variant),
                "text-black": ["light"].includes(variant),
                "text-ming-500": ["outline", "ghost"].includes(variant),
              }
            )}
          >
            <ImSpinner2 className="animate-spin" />
          </div>
        )}
        {children}
      </button>
    );
  }
);

export default Button;
