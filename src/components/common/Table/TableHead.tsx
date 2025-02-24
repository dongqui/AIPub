import { PropsWithChildren } from "react";

export default function TableHead({ children }: PropsWithChildren) {
  return (
    <thead className="bg-gray-100 border-b border-gray-200">{children}</thead>
  );
}
