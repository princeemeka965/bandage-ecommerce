"use client";

import { Montserrat } from "next/font/google";
import { Provider } from "react-redux";
import "./globals.css";
import store from "@/store";

const inter = Montserrat({ subsets: ["latin"] });

const metadata: { title: string; description: string } = {
  title: "Bandage",
  description: "An e-commerce application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>{metadata.title}</title>
      <body className={inter.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
