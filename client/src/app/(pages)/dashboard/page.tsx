"use client";
import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { FaUsers } from "react-icons/fa6";
import HeroTitle from "@/components/common/HeroTitle";
import { useGetAllCompanyQuery } from "@/services/company";
import { useGetAllProjectQuery } from "@/services/project";
import {
  useDeleteServiceMutation,
  useGetAllServiceQuery,
} from "@/services/service";
import TableService from "./service/table";
import Swal from "sweetalert2";
import { useToast } from "@/hooks/use-toast";

export default function DashboardPage() {
  const { data: dataCompany, isLoading: isLoadingCompany } =
    useGetAllCompanyQuery();

  const { data: dataProject, isLoading: isLoadingProject } =
    useGetAllProjectQuery();

  const { data: dataService, isLoading: isLoadingService } =
    useGetAllServiceQuery();
  const [mutationService] = useDeleteServiceMutation();

  const { toast } = useToast();

  const handleDeleteService = async (id: string) => {
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
        name="Dashboard"
        subtitle="Kelola Proyek Web dengan Mudah dan Efisien"
      />
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
          <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
            <FaUsers />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Clients
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              {isLoadingCompany ? (
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
              ) : (
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  {dataCompany?.data?.length || 0}
                </p>
              )}
            </p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
          <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
            <GrServices />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Services
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              {isLoadingService ? (
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
              ) : (
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  {dataService?.data?.length || 0}
                </p>
              )}
            </p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
          <div className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
            <FaProjectDiagram />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Projects
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              {isLoadingProject ? (
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
              ) : (
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  {dataProject?.data?.length || 0}
                </p>
              )}
            </p>
          </div>
        </div>
      </div>

      <TableService
        data={dataService?.data || []}
        isLoading={isLoadingService}
        handleDelete={handleDeleteService}
      />
    </div>
  );
}
