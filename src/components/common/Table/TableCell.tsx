import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  border?: boolean;
}
export default function TableCell({ children, border = true }: Props) {
  return (
    <td
      className={`p-4 vertical-align-center ${
        border ? "border-x border-gray-200" : ""
      }`}
    >
      {children}
    </td>
  );
}
