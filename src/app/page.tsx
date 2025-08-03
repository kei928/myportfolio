import { client } from "@/libs/client";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Works } from "@/components/Works";

// microCMSから返ってくるスキルデータの型を定義
type Skill = {
  id: string;
  name: string;
  // 他にlogoなどのフィールドがあればここにも定義
};

export default async function Home() {
  // microCMSから'skills'エンドポイントのデータを取得
  const { contents } = await client.get<{ contents: Skill[] }>({
    endpoint: "skills",
  });

  return (
    <>
      <About />
      <Skills />
      <Works />
    </>
  );
}