"use client";
import { NextPage } from "next";
import { Form } from "@/components/ui/form";
import TextInputWithLabel from "@/components/common/TextInputWithLabel";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Button } from "@/components/ui/button";

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
          <Button
            type="submit"
            className={`bg-purple-500 text-white font-bold py-2 px-4 w-full rounded-lg hover:bg-purple-200 hover:text-purple-500  ${
              isLoading
                ? "bg-slate-400  text-gray-700"
                : "bg-purple-500 hover:bg-purple-700"
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <AiOutlineLoading3Quarters
                  className="animate-spin mr-2"
                  size={16}
                />
                Loading
              </>
            ) : (
              "SignIn"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SigninForm;
