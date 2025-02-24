import { NextResponse } from "next/server";

import type { ResourceGroup } from "@/app/workspaces/types";

const MOCK_RESOURCE_GROUPS: ResourceGroup[] = [
  {
    id: "all",
    name: "전체 리소스 그룹",
  },
  {
    id: "basic",
    name: "기본 리소스 그룹",
  },
  {
    id: "llm-project",
    name: "llm-project",
  },
];

export async function GET() {
  return NextResponse.json({
    resourceGroups: MOCK_RESOURCE_GROUPS,
  });
}
