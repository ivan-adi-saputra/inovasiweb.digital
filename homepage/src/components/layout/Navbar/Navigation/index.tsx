import Link from "next/link";
import React from "react";

interface NavigationProps {
  url: string;
  label: string;
  isActive?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  url,
  label,
  isActive = false,
}: NavigationProps) => {
  return (
    <>
      <li>
        <Link
          href={url}
          className={`block md:px-2 hover:text-purple-600 ${
            isActive ? "text-purple-600" : "text-black"
          }`}
        >
          {label}
        </Link>
      </li>
    </>
  );
};

export default Navigation;
