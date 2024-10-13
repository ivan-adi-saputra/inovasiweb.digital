"use client";
import ButtonForm from "@/components/common/ButtonForm";
import TextInputWithLabel from "@/components/common/TextInputWithLabel";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { SignupSchema } from "@/lib/formSchema";
import { useSignUpMutation } from "@/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { NextPage } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  isRegister: (register: boolean) => void;
  email: (email: string) => void;
}

type SignupForm = z.infer<typeof SignupSchema>;

const FormSignup: NextPage<Props> = ({ isRegister, email }) => {
  const form = useForm<SignupForm>({
    resolver: zodResolver(SignupSchema),
  });

  const { toast } = useToast();
  const [mutationSignup, { isLoading }] = useSignUpMutation();

  const handleSubmit = async (val: SignupForm) => {
    try {
      const data = {
        ...val,
        phone: val.phone || "",
        company: val.company || "",
      };
      await mutationSignup(data).unwrap();

      isRegister(true);
      email(val.email);
      toast({
        title: "SignUp Successfully",
        description: "Silahkan mesukkan kode otp",
      });
    } catch (err: any) {
      toast({
        title: "SignUp Failed",
        description: err?.data?.msg || "Internal Server Error",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="mt-4">
          <TextInputWithLabel
            form={form}
            label="Nama Lengkap"
            name="name"
            placeholder="Ivan Adi Saputra"
          />
        </div>

        <div className="mt-4">
          <TextInputWithLabel
            form={form}
            label="Email Address"
            name="email"
            placeholder="inovasiweb.digital@gmail.com"
          />
        </div>

        <div className="mt-4">
          <TextInputWithLabel
            form={form}
            label="Password"
            name="password"
            isPassword
          />
        </div>

        <div className="mt-4">
          <TextInputWithLabel
            form={form}
            label="No. Telephone"
            name="phone"
            placeholder="08898367211"
          />
        </div>

        <div className="mt-4">
          <TextInputWithLabel
            form={form}
            label="Company"
            name="company"
            placeholder="PT. Inovasi Web Digital"
          />
        </div>

        <div className="mt-8">
          <ButtonForm isLoading={isLoading} name="SignUp" />
        </div>
      </form>
    </Form>
  );
};

export default FormSignup;
