"use client";
import { NextPage } from "next";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import TextInputWithLabel from "@/components/common/TextInputWithLabel";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { companySchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonForm from "@/components/common/ButtonForm";
import { Textarea } from "@/components/ui/textarea";
import UploadImage from "@/components/common/UploadImage";
import { companyResponse } from "@/types/company";

type companyForm = z.infer<typeof companySchema>;

interface Props {
  onSubmit: (data: companyForm) => void;
  isLoading: boolean;
  isEdit?: boolean;
  defaultValues?: companyResponse;
}

const FormCompany: NextPage<Props> = ({
  onSubmit,
  isLoading,
  isEdit = false,
  defaultValues,
}) => {
  const form = useForm<companyForm>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: defaultValues?.name || "",
      image: defaultValues?.image?._id || "",
      description: defaultValues?.description || "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 py-2">
            <TextInputWithLabel
              form={form}
              label="Name"
              name="name"
              placeholder="Pt. Inovasi Web Digital"
            />
          </div>

          <div className="w-full md:w-1/2 px-4 py-2">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deskripsi</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="resize-none"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full md:w-1/2 px-4 py-2">
            <FormLabel className="mb-3">Upload Image</FormLabel>
            {form?.formState?.errors?.image?.message && (
              <p className="text-sm text-red-600">
                {form?.formState?.errors?.image?.message}
              </p>
            )}
            <UploadImage
              form={form}
              name="image"
              defaultImage={defaultValues?.image?.name}
            />
          </div>

          <div className="w-full text-end px-4 py-2">
            <ButtonForm isLoading={isLoading} isEdit={isEdit} />
          </div>
        </div>
      </form>
    </Form>
  );
};

export default FormCompany;
