"use client";
import Sidebar from "@/components/layouts/Sidebar";
import { RootState, store } from "@/services/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Provider, useSelector } from "react-redux";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Provider store={store}>
        <Layout children={children} />
      </Provider>
    </>
  );
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const token = useSelector((state: RootState) => state.auth.token);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/auth/signin");
    }
  }, [token, router]);

  return (
    <>
      <Sidebar />
      <div className="p-0 md:p-4 sm:ml-64">
        <div className="p-4 rounded-lg">{children}</div>
      </div>
    </>
  );
};
