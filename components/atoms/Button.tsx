import React, { ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";

type ButtonProps = {
  text: string;
  type: "outlined" | "filled";
  className?: any;
  icon?: any;
  onClick?: () => void;
  email?: string;
};

const Button = ({
  text,
  type,
  onClick,
  icon,
  email,
  className,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "w-fit items-center justify-center text-sm rounded-md p-2",
        type ? "border border-primary-100" : "text-[#00A86B]",
        type === "outlined" && "text-[#00A86B]",
        type === "filled" && "text-white bg-primary-100",
        className
      )}
      onClick={onClick}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
