import { cn } from "@/lib/utils";
import * as React from "react";

type CardBaseProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"div">;

const CardBase: React.FC<CardBaseProps> = ({
  className,
  children,
  ...rest
}: CardBaseProps) => {
  return (
    <div
      className={cn(
        " w-full gap-8 overflow-hidden rounded-[15px] bg-white p-6 shadow-sm",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CardBase;
