"use client";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import FormSignup from "./form-signup";
import FormOtp from "./form-otp";

interface Props {}

const SignupPage: NextPage<Props> = ({}) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState<string>("");

  return (
    <div className=" w-full px-24">
      <div className="mt-4 flex items-center justify-between">
        <span className="border-b w-1/5 lg:w-1/4"></span>
        <div className="text-xs text-center text-gray-500 uppercase">
          Signup
        </div>
        <span className="border-b w-1/5 lg:w-1/4"></span>
      </div>
      {isRegister ? (
        <FormOtp
          isRegister={(register) => setIsRegister(register)}
          email={email}
        />
      ) : (
        <FormSignup
          email={(email) => setEmail(email)}
          isRegister={(register) => setIsRegister(register)}
        />
      )}
      <div className="mt-4 flex items-center justify-between">
        <span className="border-b w-1/5 md:w-1/4"></span>
        <Link href={"/auth/signin"} className="text-xs text-gray-500 uppercase">
          or SignIn
        </Link>
        <span className="border-b w-1/5 md:w-1/4"></span>
      </div>
    </div>
  );
};

export default SignupPage;
