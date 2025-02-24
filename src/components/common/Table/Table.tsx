import { PropsWithChildren } from "react";

import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableHead from "./TableHead";
import TableHeadCell from "./TableHeadCell";
import TableRow from "./TableRow";

function TableRoot({ children }: PropsWithChildren) {
  return <table className="w-full border-collapse">{children}</table>;
}

export default Object.assign(TableRoot, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  HeadCell: TableHeadCell,
});
