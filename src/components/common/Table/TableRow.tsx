import { PropsWithChildren } from "react";

export default function TableRow({ children }: PropsWithChildren) {
  return <tr className="border-b border-gray-200 hover:bg-gray-50">{children}</tr>;
} 