"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Select } from "@/components/common/Select";
import type { ResourceGroup } from "@/app/workspaces/types";

interface Props {
  resourceGroups: ResourceGroup[];
}

function ResourceGroupSelect({ resourceGroups }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const resourceGroup = searchParams.get("sortBy") || "all";

  function handleSortChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newResourceGroup = e.target.value;
    const params = new URLSearchParams(searchParams);
    params.set("sortBy", newResourceGroup);
    router.push(`?${params.toString()}`);
  }

  return (
    <Select
      name="resourceGroup"
      value={resourceGroup}
      onChange={handleSortChange}
    >
      {resourceGroups.map((group) => (
        <option key={group.id} value={group.id}>
          {group.name}
        </option>
      ))}
    </Select>
  );
}

export default ResourceGroupSelect;
