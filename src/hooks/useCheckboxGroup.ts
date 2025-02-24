import { useState } from "react";

interface Props<T> {
  items: T[];
  getItemId: (item: T) => string;
}

export function useCheckboxGroup<T>({ items, getItemId }: Props<T>) {
  const [checkedIds, setcheckedIds] = useState<Set<string>>(new Set());

  const handleCheckAll = (checked: boolean) => {
    if (checked) {
      setcheckedIds(new Set(items.map(getItemId)));
    } else {
      setcheckedIds(new Set());
    }
  };

  const handleCheck = (id: string, checked: boolean) => {
    setcheckedIds((prev) => {
      const next = new Set(prev);
      if (checked) {
        next.add(id);
      } else {
        next.delete(id);
      }
      return next;
    });
  };

  const ischecked = (id: string) => checkedIds.has(id);
  const isAllchecked = items.length > 0 && checkedIds.size === items.length;

  return {
    checkedIds: [...checkedIds],
    isAllchecked,
    ischecked,
    handleCheck,
    handleCheckAll,
  };
}
