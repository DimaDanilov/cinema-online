import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import { Sidebar } from "@/components/common/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cinema Online",
  description: "An online cinema app for watching movies and tv series",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
