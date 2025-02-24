import { PropsWithChildren } from "react";

export default function TableHeadCell({ children }: PropsWithChildren) {
  return <th className="p-4 text-center text-gray-600">{children}</th>;
}
