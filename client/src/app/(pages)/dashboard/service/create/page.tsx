"use client";
import HeroTitle from "@/components/common/HeroTitle";
import { NextPage } from "next";
import FormService from "../form";
import { useCreateServiceMutation } from "@/services/service";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { serviceSchema } from "@/lib/formSchema";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {}

type serviceForm = z.infer<typeof serviceSchema>;

const CreatePage: NextPage<Props> = ({}) => {
  const { toast } = useToast();
  const router = useRouter();

  const [mutationService, { isLoading }] = useCreateServiceMutation();

  const onSubmit = async (val: serviceForm) => {
    try {
      const data = {
        ...val,
        description: val.description || "",
      };
      await mutationService(data);

      toast({
        title: "Successfully",
        description: "Create Service Successfully",
      });
      router.push("/dashboard/service");
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Create Service Failed",
        description: err?.data?.msg || "Internal Server Error",
      });
    }
  };

  return (
    <div className="container px-6 mx-auto grid">
      <HeroTitle
        name="Create Service"
        subtitle="Partner Sukses dalam Digitalisasi Bisnis"
      />
      <FormService onSubmit={onSubmit} isLoading={isLoading} />
    </div>
  );
};

export default CreatePage;
