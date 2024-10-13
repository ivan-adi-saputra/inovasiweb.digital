"use client";
import { NextPage } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Props {
  url: string;
  Icon: React.ReactNode;
  name: string;
}

const Navlink: NextPage<Props> = ({ url, Icon, name }) => {
  let currentUrl = usePathname();
  currentUrl = currentUrl.split("/dashboard/")[1];

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(
      currentUrl == name.toLowerCase() || (!currentUrl && name == "Dashboard")
    );
  }, [currentUrl, name]);

  return (
    <li>
      <Link
        href={url}
        className={`flex items-center p-2 rounded-lg dark:hover:bg-gray-700 group
            ${
              isActive
                ? "text-white bg-purple-500 hover:bg-purple-700"
                : "text-gray-900 hover:bg-gray-100"
            }
            `}
      >
        {Icon}
        <span className="ms-3">{name}</span>
      </Link>
    </li>
  );
};

export default Navlink;
