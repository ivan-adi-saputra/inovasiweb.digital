"use client";
import HeroTitle from "@/components/common/HeroTitle";
import {
  useDeleteServiceMutation,
  useGetAllServiceQuery,
} from "@/services/service";
import { NextPage } from "next";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import TableService from "./table";
import { useToast } from "@/hooks/use-toast";
import Swal from "sweetalert2";

interface Props {}

const ServicePage: NextPage<Props> = ({}) => {
  const { data, isLoading } = useGetAllServiceQuery();
  const [mutationService] = useDeleteServiceMutation();

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
          await mutationService(id).unwrap();

          toast({
            title: "Successfully",
            description: "Delete Service Successfully",
          });
        }
      });
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Delete Service Failed",
        description: err?.data?.msg || "Internal Server Error",
      });
    }
  };
  return (
    <div className="container px-6 mx-auto grid">
      <HeroTitle
        name="Service"
        subtitle="Partner Sukses dalam Digitalisasi Bisnis"
      />
      <div className="block sm:flex items-center md:divide-x md:divide-gray-100 pb-5">
        <div className="flex items-center sm:justify-end w-full">
          <Link
            href="/dashboard/service/create"
            className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2 text-center sm:ml-auto"
          >
            <FaPlus className="mr-2" />
            Add service
          </Link>
        </div>
      </div>

      <TableService
        data={data?.data || []}
        isLoading={isLoading}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default ServicePage;
