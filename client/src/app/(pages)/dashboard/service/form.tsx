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
import { serviceSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonForm from "@/components/common/ButtonForm";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import ArrayInput from "@/components/common/ArrayInput";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type serviceForm = z.infer<typeof serviceSchema>;

interface Props {
  onSubmit: (data: serviceForm) => void;
  isLoading: boolean;
  isEdit?: boolean;
  defaultValues?: serviceForm;
}

const FormService: NextPage<Props> = ({
  onSubmit,
  isLoading,
  isEdit = false,
  defaultValues,
}) => {
  const form = useForm<serviceForm>({
    resolver: zodResolver(serviceSchema),
    defaultValues,
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
              placeholder="Web Development"
            />
          </div>

          <div className="w-full md:w-1/2 px-4 py-2">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="12000000"
                      {...field}
                      value={field.value ? +field.value : undefined}
                      onChange={(e) => {
                        const value = e?.target?.value;
                        field.onChange(value ? +value : undefined);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full md:w-1/2 px-4 py-2">
            <ArrayInput form={form} label="Benefits" name="benefits" />
          </div>

          <div className="w-full md:w-1/2 px-4 py-2">
            <FormField
              control={form.control}
              name="isRecomended"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Is Recommended</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) =>
                        field.onChange(value === "true")
                      }
                      value={field.value ? "true" : "false"}
                      className="flex flex-row space-x-4"
                    >
                      <FormItem className="flex items-center space-x-3">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Yes</FormLabel>
                      </FormItem>

                      <FormItem className="flex items-center space-x-3">
                        <FormControl>
                          <RadioGroupItem value="false" />
                        </FormControl>
                        <FormLabel className="font-normal">No</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
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

          <div className="w-full text-end px-4 py-2">
            <ButtonForm isLoading={isLoading} isEdit={isEdit} />
          </div>
        </div>
      </form>
    </Form>
  );
};

export default FormService;
