"use client";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { NextPage } from "next";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface Props {
  form: any;
  label: string;
  name: string;
  placeholder?: string;
  isPassword?: boolean;
}

const TextInputWithLabel: NextPage<Props> = ({
  form,
  label,
  name,
  placeholder,
  isPassword = false,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="block text-gray-700 text-sm font-bold mb-2">
            {label}
          </FormLabel>
          <FormControl>
            {isPassword ? (
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  className="bg-gray-100 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  placeholder={placeholder ?? "********"}
                  {...field}
                  value={field.value || ""}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(showPassword ? false : true)}
                  className="absolute inset-y-0 right-0 flex items-center px-2"
                >
                  {showPassword ? (
                    <FaEye className="text-gray-500" />
                  ) : (
                    <FaEyeSlash className="text-gray-500" />
                  )}
                </button>
              </div>
            ) : (
              <Input
                className="bg-gray-100 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                placeholder={placeholder}
                {...field}
                value={field.value || ""}
              />
            )}
          </FormControl>
          <FormMessage className="text-[11px]" />
        </FormItem>
      )}
    />
  );
};

export default TextInputWithLabel;
