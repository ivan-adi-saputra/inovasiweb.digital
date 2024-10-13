"use client";
import Logo from "@/components/common/Logo";
import ImagePeople from "@/public/assets/images/ill_login_new.png";
import { RootState, store } from "@/services/store";
import Image from "next/image";
import { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <AuthRedirect>{children}</AuthRedirect>
    </Provider>
  );
}

function AuthRedirect({ children }: { children: React.ReactNode }) {
  const token = useSelector((state: RootState) => state.auth.token);
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, [token, router]);

  return (
    <section className="flex">
      <div className="left hidden md:block w-1/2 bg-purple-800 h-screen text-center items-center justify-center">
        <Image src={ImagePeople} alt="" />
      </div>
      <div className="right w-full md:w-1/2 h-screen flex flex-col justify-center items-center">
        <Logo />
        <h1 className="header-third text-3xl font-bold mt-4">Start Today</h1>
        <p className="subheader text-md text-gray-600">
          Because tomorrow becomes never
        </p>
        {children}
      </div>
    </section>
  );
}
