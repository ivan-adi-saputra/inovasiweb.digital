"use client";
import { SigninSchema } from "@/lib/formSchema";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import SigninForm from "./form";
import { useSignInMutation } from "@/services/auth";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setToken } from "@/services/authSlice";

interface Props {}

type SigninSchema = z.infer<typeof SigninSchema>;

const SigninPage: NextPage<Props> = ({}) => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<SigninSchema>({
    resolver: zodResolver(SigninSchema),
  });

  const [signinMutation, { isLoading }] = useSignInMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (data: SigninSchema) => {
    try {
      const res = await signinMutation(data).unwrap();

      // set token
      dispatch(setToken({ email: res?.data?.email, token: res?.data?.token }));

      // notification
      toast({
        title: "Signin Successfully",
      });

      // redirect to home page
      router.push("/");
    } catch (err: any) {
      toast({
        title: "Signin Failed",
        description: err?.data?.msg || "Internal Server Error",
        variant: "destructive",
      });
    }
  };

  return (
    <div className=" w-full px-24">
      <div className="mt-4 flex items-center justify-between">
        <span className="border-b w-1/5 lg:w-1/4"></span>
        <div className="text-xs text-center text-gray-500 uppercase">
          Signin
        </div>
        <span className="border-b w-1/5 lg:w-1/4"></span>
      </div>
      <SigninForm
        form={form}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
      <div className="mt-4 flex items-center justify-between">
        <span className="border-b w-1/5 md:w-1/4"></span>
        <Link href={"/auth/signup"} className="text-xs text-gray-500 uppercase">
          or SignUp
        </Link>
        <span className="border-b w-1/5 md:w-1/4"></span>
      </div>
    </div>
  );
};

export default SigninPage;
