import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.scss";
import { Sidebar } from "@/components/common/Sidebar/Sidebar";

const montserrat = Montserrat({
  weight: ["100", "300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
});

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
      <body className={montserrat.className}>
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
