"use client";
import HeroTitle from "@/components/common/HeroTitle";
import { NextPage } from "next";
import FormCompany from "../form";
import { z } from "zod";
import { companySchema } from "@/lib/formSchema";
import { useCreateCompanyMutation } from "@/services/company";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

interface Props {}

type companyForm = z.infer<typeof companySchema>;

const CreatePage: NextPage<Props> = ({}) => {
  const [mutationCompany, { isLoading }] = useCreateCompanyMutation();

  const { toast } = useToast();
  const router = useRouter();

  const onSubmit = async (val: companyForm) => {
    try {
      const data = {
        ...val,
        description: val.description || "",
      };
      await mutationCompany(data).unwrap();

      toast({
        title: "Successfully",
        description: "Create Company Successfully",
      });
      router.push("/dashboard/company");
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Create Company Failed",
        description: err?.data?.msg || "Internal Server Error",
      });
    }
  };
  return (
    <div className="container px-6 mx-auto grid">
      <HeroTitle
        name="Create Company"
        subtitle="Partner Sukses dalam Digitalisasi Bisnis"
      />
      <FormCompany isLoading={isLoading} onSubmit={onSubmit} />
    </div>
  );
};

export default CreatePage;
