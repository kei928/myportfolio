import { client } from "@/libs/client";
import Image from "next/image";

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
  skills: { // コンテンツ参照
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
//   const { id } = params;
  const work = await client.get<Work>({
    endpoint: "works",
    contentId: params.id, 
  });

  return (
    <div>
      <h1 className="text-3xl font-bold">{work.title}</h1>

      {/* 使用スキルの表示 */}
      <div className="flex flex-wrap gap-2 mt-4">
        {work.skills.map((skill) => (
          <span key={skill.id} className="bg-gray-200 text-sm px-3 py-1 rounded-full">
            {skill.name}
          </span>
        ))}
      </div>

      {/* リッチエディタの内容を表示 */}
      <div
        dangerouslySetInnerHTML={{
          __html: work.description,
        }}
        className="prose mt-8"
      />
    </div>
  );
}