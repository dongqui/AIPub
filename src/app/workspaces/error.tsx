"use client";

import { useEffect } from "react";
import { Button } from "@/components/common/Button";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function WorkspaceError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-[400px]">
      <div className="text-xl font-semibold mb-4">
        워크스페이스 목록을 불러오는데 실패했습니다
      </div>
      <Button onClick={reset} variant="primary">
        다시 시도
      </Button>
    </div>
  );
}
