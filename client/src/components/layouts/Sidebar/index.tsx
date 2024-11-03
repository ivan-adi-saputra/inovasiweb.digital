"use client";
import Logo from "@/components/common/Logo";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Navlink from "./Navlink";
import {
  MdOutlineDashboard,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { FaChalkboardUser } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { removeToken } from "@/services/authSlice";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-40 w-64 bg-white h-screen transition-transform -translate-x-full sm:translate-x-0 border border-r-2, ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto  dark:bg-gray-800">
          <Link href="/" className="flex items-center ps-2.5 mb-5">
            <Logo />
          </Link>
          <ul className="space-y-2 font-medium">
            <Navlink
              name="Dashboard"
              url="/dashboard"
              Icon={<MdOutlineDashboard />}
            />
            <Navlink
              name="Company"
              url="/dashboard/company"
              Icon={<FaChalkboardUser />}
            />
            <Navlink
              name="Project"
              url="/dashboard/project"
              Icon={<CgWebsite />}
            />
            <Navlink
              name="Service"
              url="/dashboard/service"
              Icon={<MdOutlineMiscellaneousServices />}
            />

            <li>
              <Button
                onClick={() => dispatch(removeToken())}
                className="bg-transparent w-full flex justify-start p-2 rounded-lg dark:hover:bg-gray-700 group text-gray-900 hover:bg-gray-100"
              >
                <IoIosLogOut />
                <span className="ms-3">Sign Out</span>
              </Button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
