"use client";
import Link from "next/link";
import List from "./List";
import Logo from "@/components/common/Logo";

export default function Navbar() {
  return (
    <header>
      <nav className="z-50 w-full fixed bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 ">
          <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
            <input
              aria-hidden="true"
              type="checkbox"
              name="toggle_nav"
              id="toggle_nav"
              className="hidden peer"
            />
            <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
              <Link
                href="/"
                aria-label="logo"
                className="flex space-x-2 items-center"
              >
                <Logo />
              </Link>

              <div className="relative flex items-center lg:hidden max-h-10">
                <label
                  role="button"
                  aria-label="hamburger"
                  htmlFor="toggle_nav"
                  className="relative p-6 -mr-6 cursor-pointer"
                >
                  <div
                    aria-hidden="true"
                    className="m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                  ></div>
                </label>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70"
            ></div>
            <List />
          </div>
        </div>
      </nav>
    </header>
  );
}
