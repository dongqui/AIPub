import WorkspaceList from "./(components)/WorkspaceList";
import { getApiUrl } from "@/utils/api";
import type { WorkspaceListResponse, ResourceGroupListResponse } from "./types";

export default async function WorkspacesPage({
  searchParams,
}: {
  searchParams: Promise<{ sortBy?: string }>;
}) {
  const [workspaces, resourceGroups] = await Promise.all([
    fetch(getApiUrl("/workspaces", await searchParams)).then(
      (res) => res.json() as Promise<WorkspaceListResponse>
    ),
    fetch(getApiUrl("/resource-groups")).then(
      (res) => res.json() as Promise<ResourceGroupListResponse>
    ),
  ]);

  return (
    <WorkspaceList
      workspaces={workspaces.workspaces}
      workspaceCount={workspaces.totalCount}
      resourceGroups={resourceGroups.resourceGroups}
    />
  );
}
