import { Workspace } from "@/app/workspaces/types";
import { NextResponse } from "next/server";

const MOCK_WORKSPACES: Workspace[] = [
  {
    id: "1",
    meta: {
      name: "child-voice-01",
      sshInfo: "ssh://34.64.54.101:32174",
      image: "tensorflow/2.0.0.8",
      link: "/workspaces/1",
    },
    resourceGroup: "기본 리소스 그룹",
    createdAt: "2024/02/29 11:00:27",
    runtime: "생성대기중 \n (우선 순위 미포함)",
    resourceInfo: {
      type: "nvidia-a100-sxm4-40gb-mig-2g.1",
      num: 4,
    },
    status: {
      type: "pending",
    },
  },
  {
    id: "2",
    meta: {
      name: "lm-project",
      sshInfo: "ssh://34.64.54.101:30790",
      image: "tensorflow/2.0.0.8",
      link: "/workspaces/2",
    },
    resourceGroup: "기본 리소스 그룹",
    createdAt: "2024/02/26 17:22:21",
    runtime: "2024/02/29 10:32:54 ~ \n (가동중)",
    resourceInfo: {
      type: "tesla-t4",
      num: 2,
    },
    status: {
      type: "running",
    },
  },
  {
    id: "3",
    meta: {
      name: "workspace-02",
      sshInfo: "-",
      image: "tensorflow/2.0.0.8",
      link: "/workspaces/3",
    },
    resourceGroup: "llm-project",
    createdAt: "2024/02/26 17:23:04",
    runtime: "-",
    resourceInfo: {
      type: "cpu-resource",
      num: 1,
    },
    status: {
      type: "error",
      message: "리소스 할당 실패",
    },
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sortBy = searchParams.get("sortBy");

  let filteredWorkspaces = MOCK_WORKSPACES;

  if (sortBy === "basic") {
    filteredWorkspaces = MOCK_WORKSPACES.filter(
      (workspace) => workspace.resourceGroup === "기본 리소스 그룹"
    );
  } else if (sortBy === "llm-project") {
    filteredWorkspaces = MOCK_WORKSPACES.filter(
      (workspace) => workspace.resourceGroup === "llm-project"
    );
  }

  return NextResponse.json({
    workspaces: filteredWorkspaces,
    totalCount: filteredWorkspaces.length,
  });
}
