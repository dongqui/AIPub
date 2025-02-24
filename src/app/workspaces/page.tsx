import { getApiUrl } from "@/utils/api";
import WorkspaceList from "./(components)/WorkspaceList";
import type { WorkspaceListResponse } from "./types";

interface Props {
  searchParams: Promise<{ sortBy?: string }>;
}

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ sortBy?: string }>;
}) {
  return <WorkspaceListContainer searchParams={searchParams} />;
}

async function WorkspaceListContainer({ searchParams }: Props) {
  const [workspaces, resourceGroups] = await Promise.all([
    fetch(getApiUrl("/workspaces", await searchParams)).then(
      (res) => res.json() as Promise<WorkspaceListResponse>
    ),
    fetch(getApiUrl("/resource-groups")).then((res) => res.json()),
  ]);

  return (
    <WorkspaceList
      workspaces={workspaces.workspaces}
      workspaceCount={workspaces.totalCount}
      resourceGroups={resourceGroups.resourceGroups}
    />
  );
}
