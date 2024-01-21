"use client";

import { Montserrat } from "next/font/google";
import { Provider } from "react-redux";
import "./globals.css";
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";

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
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
