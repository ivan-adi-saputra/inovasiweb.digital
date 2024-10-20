"use client";
import HeroTitle from "@/components/common/HeroTitle";
import { NextPage } from "next";
import FormCompany from "../form";
import { z } from "zod";
import { projectSchema } from "@/lib/formSchema";
import { useCreateCompanyMutation } from "@/services/company";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useCreateProjectMutation } from "@/services/project";
import FormProject from "../form";

interface Props {}

type projectForm = z.infer<typeof projectSchema>;

const CreatePage: NextPage<Props> = ({}) => {
  const [mutationProject, { isLoading }] = useCreateProjectMutation();

  const { toast } = useToast();
  const router = useRouter();

  const onSubmit = async (val: any) => {
    try {
      const data = {
        ...val,
        image: val.image || "",
        description: val.description || "",
      };
      await mutationProject(data).unwrap();

      toast({
        title: "Successfully",
        description: "Create Project Successfully",
      });
      router.push("/dashboard/project");
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Create Project Failed",
        description: err?.data?.msg || "Internal Server Error",
      });
    }
  };
  return (
    <div className="container px-6 mx-auto grid">
      <HeroTitle
        name="Create Project"
        subtitle="Partner Sukses dalam Digitalisasi Bisnis"
      />

      <FormProject isLoading={isLoading} onSubmit={onSubmit} />
    </div>
  );
};

export default CreatePage;
