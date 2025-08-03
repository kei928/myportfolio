import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header"; // Headerをインポート

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"], // 使うフォントの太さを指定
});
export const metadata: Metadata = {
  title: "NiwaSatoru Portfolio", 
  description: "ポートフォリオサイトです。",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.className} bg-slate-100 text-gray-800`}>
        <Header /> 
        <main className="container mx-auto p-8">{children}</main> {/* childrenをmainタグで囲む */}
      </body>
    </html>
  );
}