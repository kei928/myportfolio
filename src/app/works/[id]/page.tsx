import { client } from "@/libs/client";
import styles from "@/styles/prose.module.css";
import Link from "next/link";
// 'works'エンドポイントの型定義（リッチエディタや参照コンテンツも追加）
type Work = {
  id: string;
  title: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  description: string; // リッチエディタ
  skills: {
    // コンテンツ参照
    id: string;
    name: string;
    logo?: { url: string };
  }[];
};

type Props = {
  params: {
    id: string;
  };
};

export default async function WorkDetail({ params }: Props) {
  const work = await client.get<Work>({
    endpoint: "works",
    contentId: params.id,
  });

  return (
    <section className="container mx-auto p-4 md:p-8">
      <div className="bg-[#252526] rounded-lg shadow-lg p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl text-[#d4d4d4] font-bold">
          {work.title}
        </h1>

        {/* 使用スキルの表示 */}
        <div className="flex flex-wrap gap-3 my-6 border-y border-gray-700 py-4">
          {work.skills.map((skill) => (
            <span
              key={skill.id}
              className="bg-[#333333] text-[#569cd6] text-sm font-semibold px-3 py-1 rounded-full"
            >
              {skill.name}
            </span>
          ))}
        </div>
        <div
          className={`${styles.content} mt-8`} // 2. 作成したCSSのクラスを適用
          dangerouslySetInnerHTML={{
            __html: work.description,
          }}
        />
        <div className="mt-12 text-center">
          <Link
            href="/#works"
            className="inline-block border border-[#383838] text-[#d4d4d4] py-3 px-8 rounded-lg hover:bg-[#333333] transition-colors"
          >
            ← Products一覧へ戻る
          </Link>
        </div>
      </div>
    </section>
  );
}
