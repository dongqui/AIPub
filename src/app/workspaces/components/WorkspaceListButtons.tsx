import { useRouter } from "next/navigation";

import { Button } from "@/components/common/Button";

interface Props {
  checkedIds: string[];
}

export default function WorkspaceListButtons({ checkedIds }: Props) {
  const router = useRouter();

  const handleClickWorkspaceCreate = () => router.push("/workspaces/create");

  const handleClickDelete = () => {
    alert(`삭제 ${JSON.stringify([...checkedIds])}`);
  };

  return (
    <div className="flex gap-2">
      <Button variant="outlined" onClick={handleClickDelete}>
        선택 항목 삭제
      </Button>
      <Button
        variant="primary"
        onClick={handleClickWorkspaceCreate}
        role="link"
        aria-label="워크스페이스 신청 페이지로 이동"
      >
        워크스페이스 신청
      </Button>
    </div>
  );
}
