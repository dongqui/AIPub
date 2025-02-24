"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BellIcon,
  PlusIcon,
  ListBulletIcon,
  ClockIcon,
  CommandLineIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

function Sidebar() {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    {
      label: "통합 알림 센터",
      path: "/notifications",
      icon: <BellIcon className="w-5 h-5" />,
    },
    {
      label: "워크스페이스 신청",
      path: "/workspaces/create",
      icon: <PlusIcon className="w-5 h-5" />,
    },
    {
      label: "워크스페이스 목록",
      path: "/workspaces",
      icon: <ListBulletIcon className="w-5 h-5" />,
    },
    {
      label: "이미지 목록",
      path: "/images",
      icon: <ClockIcon className="w-5 h-5" />,
    },
    {
      label: "사용 내역",
      path: "/history",
      icon: <ClockIcon className="w-5 h-5" />,
    },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-100">
      <Link href="/" className="p-4 block">
        <span className="text-xl font-semibold">AIPub</span>
      </Link>

      <nav>
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`
                flex items-center gap-3 px-4 py-3 
                ${isActive ? "bg-blue-200" : "text-gray-700 hover:bg-gray-100"}
              `}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4">
        <div className="text-sm text-gray-500 border border-gray-200 p-4">
          <div>Powered by</div>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex items-center gap-2">
              <CommandLineIcon className="w-4 h-4" />
              <span>Jupyter Notebook</span>
            </div>
            <div className="flex items-center gap-2">
              <ChartBarIcon className="w-4 h-4" />
              <span>Tensorboard</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
