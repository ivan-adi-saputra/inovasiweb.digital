"use client";
import { NextPage } from "next";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
import TableClient from "./table";
import HeroTitle from "@/components/common/HeroTitle";

interface Props {}

const ClientPage: NextPage<Props> = ({}) => {
  const dataClients: any = [];
  const isLoading: boolean = false;

  return (
    <div className="container px-6 mx-auto grid">
      <HeroTitle
        name="Client"
        subtitle="Partner Sukses dalam Digitalisasi Bisnis"
      />
      <div className="block sm:flex items-center md:divide-x md:divide-gray-100 pb-5">
        <div className="flex items-center sm:justify-end w-full">
          <Link
            href="/dashboard/client/create"
            className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2 text-center sm:ml-auto"
          >
            <FaPlus className="mr-2" />
            Add client
          </Link>
        </div>
      </div>

      <TableClient data={dataClients} isLoading={isLoading} />
    </div>
  );
};

export default ClientPage;
