import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout"; 

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.className} bg-[#1e1e1e] text-[#d4d4d4]`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}