"use client";
import Link from "next/link";
import Navigation from "../Navigation";

export default function List() {
  return (
    <div className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1 absolute top-full left-0 transition-all duration-300 scale-95 origin-top lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none dark:shadow-none dark:bg-gray-800 dark:border-gray-700">
      <div className="text-slate-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
        <ul className="tracking-wide font-normal text-sm flex-col flex md:flex-row gap-6 md:gap-0 md:space-x-4">
          <Navigation label="Home" url="/" isActive />
          <Navigation label="Benefit" url="#benefits" />
          <Navigation label="Steps" url="#steps" />
          <Navigation label="Pricing" url="#pricing" />
          <Navigation label="Showcase" url="#showcase" />
        </ul>
      </div>

      <div className="mt-12 lg:mt-0">
        {/* {session ? ( */}
        {/* <button onClick={() => signOut()} className={commonClass}>
              <span className="relative text-md font-semibold text-white">
                Logout
              </span>
            </button>
          ) : ( */}
        <Link
          href="/auth/signin"
          className="bg-purple-600 text-white hover:bg-purple-100 hover:text-purple-600 px-9 py-2 rounded-full border-0 font-medium w-full block text-center transition duration-300 ease-in-out transform"
        >
          SignIn
        </Link>
        {/* )} */}
      </div>
    </div>
  );
}
