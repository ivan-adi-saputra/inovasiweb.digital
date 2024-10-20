"use client";
import HeroTitle from "@/components/common/HeroTitle";
import { NextPage } from "next";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useParams, useRouter } from "next/navigation";
import { projectSchema } from "@/lib/formSchema";
import {
  useGetOneProjectQuery,
  useUpdateProjectMutation,
} from "@/services/project";
import FormProject from "../../form";

interface Props {}

type projectForm = z.infer<typeof projectSchema>;

const UpdatePage: NextPage<Props> = ({}) => {
  const params = useParams();

  const { data: dataService } = useGetOneProjectQuery(params.id.toString());

  const defaultValues = {
    ...dataService?.data,
    image: dataService?.data.image?._id?.toString() || "",
    service: dataService?.data.service?._id?.toString() || "",
    date: dataService?.data.date || null,
    name: dataService?.data?.name || "",
    features: dataService?.data?.features || [],
  };

  const [mutationProject, { isLoading }] = useUpdateProjectMutation();

  const { toast } = useToast();
  const router = useRouter();

  const onSubmit = async (val: projectForm) => {
    try {
      const data = {
        ...val,
        image: val.image || undefined,
        description: val.description || "",
      };
      await mutationProject({ id: params.id.toString(), body: data }).unwrap();

      toast({
        title: "Successfully",
        description: "Update Project Successfully",
      });
      router.push("/dashboard/project");
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Update Project Failed",
        description: err?.data?.msg || "Internal Server Error",
      });
    }
  };
  return (
    <div className="container px-6 mx-auto grid">
      <HeroTitle
        name="Update Project"
        subtitle="Partner Sukses dalam Digitalisasi Bisnis"
      />
      <FormProject
        isLoading={isLoading}
        onSubmit={onSubmit}
        isEdit
        defaultValues={defaultValues}
      />
    </div>
  );
};

export default UpdatePage;
