export interface ResourceGroup {
  id: string;
  name: string;
}
export interface Workspace {
  id: string;
  meta: {
    name: string;
    sshInfo: string;
    image: string;
    link: string;
  };
  resourceGroup: string;
  createdAt: string;
  runtime: string;
  resourceInfo: {
    type: string;
    num: number;
  };
  status: {
    type: "pending" | "running" | "error";
    message?: string;
  };
}

export interface WorkspaceListResponse {
  workspaces: Workspace[];
  totalCount: number;
}

export interface ResourceGroupListResponse {
  resourceGroups: ResourceGroup[];
}
