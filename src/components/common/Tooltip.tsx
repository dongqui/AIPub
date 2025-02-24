"use client";

import { useState, useRef, useEffect } from "react";

interface Props {
  content: React.ReactNode;
  children: React.ReactNode;
}

export function Tooltip({ content, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block" ref={tooltipRef}>
      <div onClick={handleClick}>{children}</div>
      {isOpen && (
        <div
          className="
            absolute right-1 z-10 mt-2 
            bg-white rounded-md shadow-lg border border-gray-200 
            p-4 min-w-[200px]
           
          "
        >
          {content}
        </div>
      )}
    </div>
  );
}
