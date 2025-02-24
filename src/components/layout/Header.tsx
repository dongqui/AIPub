"use client";
import { BellIcon, UserIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200  flex items-center justify-end">
      <div className="h-full px-6 flex items-center gap-4">
        <BellIcon className="w-5 h-5" />
        <UserIcon className="w-5 h-5" />
      </div>
    </header>
  );
}

export default Header;
