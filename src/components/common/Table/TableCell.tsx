import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  border?: boolean;
  className?: string;
}
export default function TableCell({
  children,
  border = true,
  className = "",
}: Props) {
  return (
    <td
      className={`p-4 vertical-align-center text-center ${
        border ? "border-x border-gray-200" : ""
      } ${className}`}
    >
      {children}
    </td>
  );
}
