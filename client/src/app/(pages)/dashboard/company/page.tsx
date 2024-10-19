"use client";
import HeroTitle from "@/components/common/HeroTitle";
import { NextPage } from "next";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import TableCompany from "./table";
import {
  useDeleteCompanyMutation,
  useGetAllCompanyQuery,
} from "@/services/company";
import Swal from "sweetalert2";
import { useToast } from "@/hooks/use-toast";

interface Props {}

const CompanyPage: NextPage<Props> = ({}) => {
  const { data, isLoading } = useGetAllCompanyQuery();
  const [mutationCompany] = useDeleteCompanyMutation();

  const { toast } = useToast();

  const handleDelete = async (id: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result: any) => {
        if (result.isConfirmed) {
          await mutationCompany(id).unwrap();

          toast({
            title: "Successfully",
            description: "Delete Client Successfully",
          });
        }
      });
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Delete Client Failed",
        description: err?.data?.message || "Internal Server Error",
      });
    }
  };

  return (
    <div className="container px-6 mx-auto grid">
      <HeroTitle
        name="Company"
        subtitle="Partner Sukses dalam Digitalisasi Bisnis"
      />
      <div className="block sm:flex items-center md:divide-x md:divide-gray-100 pb-5">
        <div className="flex items-center sm:justify-end w-full">
          <Link
            href="/dashboard/company/create"
            className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2 text-center sm:ml-auto"
          >
            <FaPlus className="mr-2" />
            Add company
          </Link>
        </div>
      </div>

      <TableCompany
        data={data?.data || []}
        isLoading={isLoading}
        handleDelete={(id) => handleDelete(id)}
      />
    </div>
  );
};

export default CompanyPage;
