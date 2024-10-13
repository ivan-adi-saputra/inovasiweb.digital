"use client";
import { NextPage } from "next";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import TextInputWithLabel from "@/components/common/TextInputWithLabel";
import ButtonForm from "@/components/common/ButtonForm";

interface Props {
  form: any;
  handleSubmit: (data: any) => void;
  isLoading: boolean;
}

const SigninForm: NextPage<Props> = ({ form, handleSubmit, isLoading }) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
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

        <div className="mt-8">
          <ButtonForm isLoading={isLoading} name="SignIn" />
        </div>
      </form>
    </Form>
  );
};

export default SigninForm;
