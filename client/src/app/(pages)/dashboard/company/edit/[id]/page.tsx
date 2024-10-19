"use client";
import HeroTitle from "@/components/common/HeroTitle";
import { NextPage } from "next";
import FormCompany from "../../form";
import { z } from "zod";
import { companySchema } from "@/lib/formSchema";
import {
  useGetOneCompanyQuery,
  useUpdateCompanyMutation,
} from "@/services/company";
import { useToast } from "@/hooks/use-toast";
import { useParams, useRouter } from "next/navigation";

interface Props {}

type companyForm = z.infer<typeof companySchema>;

const UpdatePage: NextPage<Props> = ({}) => {
  const params = useParams();

  const { data: defaultValues } = useGetOneCompanyQuery(params.id.toString());
  console.log(defaultValues);
  const [mutationCompany, { isLoading }] = useUpdateCompanyMutation();

  const { toast } = useToast();
  const router = useRouter();

  const onSubmit = async (val: companyForm) => {
    try {
      const data = {
        ...val,
        description: val.description || "",
      };
      await mutationCompany({ id: params.id.toString(), body: data }).unwrap();

      toast({
        title: "Successfully",
        description: "Update Company Successfully",
      });
      router.push("/dashboard/company");
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Update Company Failed",
        description: err?.data?.msg || "Internal Server Error",
      });
    }
  };
  return (
    <div className="container px-6 mx-auto grid">
      <HeroTitle
        name="Update Company"
        subtitle="Partner Sukses dalam Digitalisasi Bisnis"
      />
      <FormCompany
        isLoading={isLoading}
        onSubmit={onSubmit}
        isEdit
        defaultValues={defaultValues?.data}
      />
    </div>
  );
};

export default UpdatePage;
