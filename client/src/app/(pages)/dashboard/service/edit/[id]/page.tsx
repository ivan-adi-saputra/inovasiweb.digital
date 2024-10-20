"use client";
import HeroTitle from "@/components/common/HeroTitle";
import { NextPage } from "next";
import {
  useGetOneServiceQuery,
  useUpdateServiceMutation,
} from "@/services/service";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { serviceSchema } from "@/lib/formSchema";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import FormService from "../../form";

interface Props {}

type serviceForm = z.infer<typeof serviceSchema>;

const EditPage: NextPage<Props> = ({}) => {
  const { toast } = useToast();
  const router = useRouter();
  const params = useParams();

  const [mutationService, { isLoading }] = useUpdateServiceMutation();
  const { data: defaultValues } = useGetOneServiceQuery(params.id.toString());

  const onSubmit = async (val: serviceForm) => {
    try {
      const data = {
        ...val,
        description: val.description || "",
      };
      await mutationService({ body: data, id: params.id.toString() });

      toast({
        title: "Successfully",
        description: "Update Service Successfully",
      });
      router.push("/dashboard/service");
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Update Service Failed",
        description: err?.data?.msg || "Internal Server Error",
      });
    }
  };

  return (
    <div className="container px-6 mx-auto grid">
      <HeroTitle
        name="Update Service"
        subtitle="Partner Sukses dalam Digitalisasi Bisnis"
      />
      <FormService
        onSubmit={onSubmit}
        isLoading={isLoading}
        isEdit
        defaultValues={defaultValues?.data}
      />
    </div>
  );
};

export default EditPage;
