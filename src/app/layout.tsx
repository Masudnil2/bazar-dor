import type { Metadata } from "next";
import { Suspense } from "react";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import { getCategories, getProducts } from "@/lib/api";

const bangla = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bangla",
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "প্রয়োজনীয় পণ্যের দাম এক নজরে।",
};

async function Header() {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);

  return (
    <>
      <Navbar categories={categories} />
      <Ticker products={products} />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn" data-theme="light">
      <body
        className={`${bangla.variable} antialiased`}
        suppressHydrationWarning
      >
        <Suspense fallback={<div className="h-28 border-b border-line bg-surface" />}>
          <Header />
        </Suspense>
        {children}
      </body>
    </html>
  );
}