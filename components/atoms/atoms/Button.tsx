import React, { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  text: string;
  type: "outlined" | "filled";
  className?: any;
  icon?: any;
};
const Button = ({ text, type, className, icon }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "w-32 h-12 inline-flex items-center justify-center font-medium align-middle text-center rounded-md tracking-tighter",
        type ? "border border-primary-100" : "text-[#00A86B]",
        type === "outlined" && "text-[#00A86B]",
        type === "filled" && "text-white bg-primary-100"
      )}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
