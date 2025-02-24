import Table from "@/components/common/Table/Table";

export default function WorkspaceListSkeleton() {
  return (
    <div className="p-6">
      <div className="mb-6 flex gap-4 items-center">
        <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
        <div className="h-6 w-16 bg-gray-200 rounded animate-pulse" />
      </div>

      <div className="flex items-center justify-between mt-24">
        <div className="w-1/4">
          <div className="h-10 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="flex gap-2">
          <div className="h-10 w-32 bg-gray-200 rounded animate-pulse" />
          <div className="h-10 w-32 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      <div className="mt-12">
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.HeadCell>
                <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
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
            {[...Array(3)].map((_, i) => (
              <Table.Row key={i}>
                {[...Array(7)].map((_, j) => (
                  <Table.Cell key={j}>
                    <div className="h-6 bg-gray-200 rounded animate-pulse" />
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
