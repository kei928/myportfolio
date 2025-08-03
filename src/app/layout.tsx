import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const metadata: Metadata = {
  title: "NiwaSatoru Portfolio",
  description: "丹羽慧のポートフォリオサイトです。",
  openGraph: {
    title: "あなたの名前のポートフォリオ",
    description: "丹羽慧のポートフォリオサイトです。",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.className} bg-gray-900 text-gray-300`}>
        <Header />
        <main className="container mx-auto p-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
