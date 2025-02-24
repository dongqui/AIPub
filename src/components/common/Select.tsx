import { SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

export function Select({ children, className = "", ...props }: Props) {
  return (
    <select
      className={`border border-gray-300 bg-white text-gray-900 shadow-sm w-full p-2 focus:outline-none  ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}
