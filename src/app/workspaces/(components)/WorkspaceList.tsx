"use client";

import Link from "next/link";
import {
  EllipsisHorizontalIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { Tooltip } from "@/components/common/Tooltip";

import Table from "@/components/common/Table/Table";
import ResourceGroupSelect from "./ResourceGroupSelect";
import type { Workspace, ResourceGroup } from "../types";
import { useCheckboxGroup } from "@/hooks/useCheckboxGroup";
import WorkspaceListHeader from "./WorkspaceListHeader";
import WorkspaceListButtons from "./WorkspaceListButtons";
import { Button } from "@/components/common/Button";

interface WorkspaceListProps {
  workspaces: Workspace[];
  workspaceCount: number;
  resourceGroups: ResourceGroup[];
}

export default function WorkspaceList({
  workspaces,
  workspaceCount,
  resourceGroups,
}: WorkspaceListProps) {
  const { checkedIds, isAllchecked, ischecked, handleCheck, handleCheckAll } =
    useCheckboxGroup({
      items: workspaces,
      getItemId: (workspace) => workspace.id,
    });

  const handleChangeAllCheckbox = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleCheckAll(e.target.checked);

  const handleChangeCheckbox =
    (id: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
      handleCheck(id, e.target.checked);

  return (
    <div className="p-6">
      <WorkspaceListHeader workspaceCount={workspaceCount} />

      <div className="flex items-center justify-between mt-24">
        <div className="w-1/4">
          <ResourceGroupSelect resourceGroups={resourceGroups} />
        </div>
        <WorkspaceListButtons checkedIds={checkedIds} />
      </div>

      <div className="mt-12">
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.HeadCell>
                <input
                  type="checkbox"
                  checked={isAllchecked}
                  onChange={handleChangeAllCheckbox}
                />
              </Table.HeadCell>
              <Table.HeadCell>리소스 그룹</Table.HeadCell>
              <Table.HeadCell>이름</Table.HeadCell>
              <Table.HeadCell>신청 시간</Table.HeadCell>
              <Table.HeadCell>가동 시간</Table.HeadCell>
              <Table.HeadCell>리소스 타입 / 개수</Table.HeadCell>
              <Table.HeadCell>상태</Table.HeadCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {workspaces.map((workspace) => (
              <Table.Row key={workspace.id}>
                <Table.Cell border={false}>
                  <input
                    type="checkbox"
                    checked={ischecked(workspace.id)}
                    onChange={handleChangeCheckbox(workspace.id)}
                  />
                </Table.Cell>

                <Table.Cell>{workspace.resourceGroup}</Table.Cell>

                <Table.Cell>
                  <span className="font-semibold block text-left">
                    {workspace.meta.name}
                  </span>
                  <span className="mt-4 block text-left">
                    SSH주소: {workspace.meta.sshInfo || "-"}
                  </span>
                  <span className="text-left block">
                    이미지: {workspace.meta.image || "-"}
                  </span>
                </Table.Cell>

                <Table.Cell>{workspace.createdAt}</Table.Cell>

                <Table.Cell className="whitespace-pre-line">
                  {workspace.runtime}
                </Table.Cell>

                <Table.Cell>
                  <div>
                    {workspace.resourceInfo.type}: {workspace.resourceInfo.num}
                    개
                  </div>
                  <Tooltip
                    content={
                      <div className="text-sm">
                        <div className="font-semibold mb-2">리소스 정보</div>
                        <div>GPU: 5.6코어</div>
                        <div>GPU: 100% </div>
                        <div>MEM: 20.49GB </div>
                      </div>
                    }
                  >
                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 cursor-pointer hover:bg-gray-50">
                      <EllipsisHorizontalIcon className="w-4 h-4 text-gray-500" />
                    </div>
                  </Tooltip>
                </Table.Cell>

                <Table.Cell border={false}>
                  {workspace.status.type === "running" && (
                    <>
                      <Link href={`/workspaces/${workspace.id}`}>
                        상세 보기{">"}
                      </Link>
                      <div>
                        <Button variant="outlined">반납하기</Button>
                      </div>
                    </>
                  )}

                  {workspace.status.type === "pending" && (
                    <>
                      <Link href={`/workspaces/${workspace.id}`}>
                        상세 보기{">"}
                      </Link>
                      <div>
                        <Button variant="outlined">재신청하기</Button>
                      </div>
                    </>
                  )}

                  {workspace.status.type === "error" && (
                    <>
                      <Tooltip content={workspace.status.message}>
                        <div className="text-red-500 flex items-center justify-center gap-2">
                          생성 실패{" "}
                          <InformationCircleIcon className="w-4 h-4" />
                        </div>
                      </Tooltip>
                      <div>
                        <Button variant="outlined">신청 취소</Button>
                      </div>
                    </>
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
