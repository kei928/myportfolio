"use client"; 

import { useState, useEffect } from "react";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { AnimatePresence } from "framer-motion"; 

import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader"; 

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// export const metadata: Metadata = {
//   title: "Niwa Portfolio",
//   description: "Webデベロッパーのポートフォリオサイトです。",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <html lang="ja">
      <body className={`${notoSansJp.className} bg-[#1e1e1e] text-[#d4d4d4]`}>
        <AnimatePresence>
          {isLoading && <Preloader />}
        </AnimatePresence>
        
        {!isLoading && (
          <>
            <Header />
            <main>{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
