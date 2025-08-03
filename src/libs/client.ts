import { createClient } from "microcms-js-sdk";

// 環境変数が設定されているかチェック
if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
  throw new Error("NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN is required");
}
if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
  throw new Error("NEXT_PUBLIC_MICROCMS_API_KEY is required");
}

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});