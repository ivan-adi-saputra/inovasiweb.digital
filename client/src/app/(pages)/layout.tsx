"use client";

import Sidebar from "@/components/layouts/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      <div className="p-0 md:p-4 sm:ml-64">
        <div className="p-4 rounded-lg">{children}</div>
      </div>
    </>
  );
}
