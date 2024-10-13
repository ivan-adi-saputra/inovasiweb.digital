"use client";
import { NextPage } from "next";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ActivateSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useActivateMutation } from "@/services/auth";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import ButtonForm from "@/components/common/ButtonForm";
import { formatTime } from "@/lib/utils";

interface Props {
  email: string;
  isRegister: (register: boolean) => void;
}

type ActivateForm = z.infer<typeof ActivateSchema>;

const FormOtp: NextPage<Props> = ({ email, isRegister }) => {
  const [timeLeft, setTimeLeft] = useState<number>(5 * 60);

  const form = useForm<ActivateForm>({
    resolver: zodResolver(ActivateSchema),
  });

  const [activateMutation, { isLoading }] = useActivateMutation();
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (data: ActivateForm) => {
    try {
      await activateMutation({ ...data, email }).unwrap();

      toast({
        title: "Activate Successfully",
        description: "Akun anda berhasil diaktivasi. Silahkan Signin",
      });
      router.push("/auth/signin");
    } catch (err: any) {
      toast({
        title: "Activate Failed",
        description: err?.data?.msg || "Internal Server Error",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      toast({
        title: "Activate Failed",
        description:
          "Yahh! Waktu anda sudah habis, Silahkan registrasi ulang...",
        variant: "destructive",
      });
      isRegister(false);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="mt-4 flex justify-center">
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 text-sm font-bold mb-2 flex justify-center">
                  Kode Otp
                </FormLabel>
                <FormControl>
                  <InputOTP
                    maxLength={4}
                    {...field}
                    value={field?.value?.toString()}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormLabel className="block text-gray-600 text-[10px] font-light mb-2">
                  Aktivasi akun anda sebelum: {formatTime(timeLeft)}
                </FormLabel>
                <FormMessage className="text-[11px]" />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-8">
          <ButtonForm isLoading={isLoading} name="Activate" />
        </div>
      </form>
    </Form>
  );
};

export default FormOtp;
