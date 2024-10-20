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
import { projectSchema, serviceSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonForm from "@/components/common/ButtonForm";
import { Textarea } from "@/components/ui/textarea";
import ArrayInput from "@/components/common/ArrayInput";
import UploadImage from "@/components/common/UploadImage";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Select from "react-select";
import { useGetAllServiceQuery } from "@/services/service";

type projectForm = z.infer<typeof projectSchema>;

interface Props {
  onSubmit: (data: projectForm) => void;
  isLoading: boolean;
  isEdit?: boolean;
  defaultValues?: projectForm;
}

const FormProject: NextPage<Props> = ({
  onSubmit,
  isLoading,
  isEdit = false,
  defaultValues,
}) => {
  const form = useForm<projectForm>({
    resolver: zodResolver(projectSchema),
    defaultValues,
  });

  const { data: dataService } = useGetAllServiceQuery();
  const optionsService = dataService?.data?.map((service) => ({
    value: service?._id?.toString(),
    label: service.name,
  }));

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 py-2">
            <FormLabel className="mb-3">Service</FormLabel>
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    isLoading={isLoading}
                    isClearable
                    isSearchable
                    name="service"
                    options={optionsService}
                    onChange={(option) => field.onChange(option?.value)}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full md:w-1/2 px-4 py-2">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Tanggal</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={
                          field.value instanceof Date ? field.value : undefined
                        }
                        onSelect={field.onChange}
                        disabled={(date: any) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full md:w-1/2 px-4 py-2">
            <TextInputWithLabel
              form={form}
              label="Name Project"
              name="name"
              placeholder="Pembuatan Website E-Commerce"
            />
          </div>

          <div className="w-full md:w-1/2 px-4 py-2">
            <ArrayInput form={form} label="Features" name="features" />
          </div>

          <div className="w-full md:w-1/2 px-4 py-2">
            <FormLabel className="mb-3">Upload Image</FormLabel>
            <UploadImage form={form} name="image" />
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

export default FormProject;
