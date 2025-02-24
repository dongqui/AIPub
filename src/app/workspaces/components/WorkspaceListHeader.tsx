interface Props {
  workspaceCount: number;
}

export default function WorkspaceListHeader({ workspaceCount }: Props) {
  return <div className="mb-6 flex gap-4 items-center">
  <h1 className="text-2xl font-semibold">워크스페이스 목록</h1>
  <span>
    <span className="text-blue-500 font-semibold mr-1">
      {workspaceCount}
    </span>
    개
  </span>
</div>;
}

