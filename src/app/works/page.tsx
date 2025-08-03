import Link from "next/link";
import Image from "next/image";
import { client } from "@/libs/client";

// 実績データの型定義
export type Work = {
  id: string;
  title: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
};

export default async function WorksPage() {
  const { contents } = await client.get<{ contents: Work[] }>({
    endpoint: "works",
  });

  return (
    <div>
      <h1 className="text-2xl font-bold">実績一覧</h1>
      <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {contents.map((work) => (
          <li key={work.id}>
            <Link href={`/works/${work.id}`} className="block group">
              {work.thumbnail && (
                <Image
                  src={work.thumbnail.url}
                  width={work.thumbnail.width}
                  height={work.thumbnail.height}
                  alt=""
                  className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
              )}
              <p className="mt-4 text-lg font-semibold">{work.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}