import { client } from "@/libs/client";
import Link from "next/link";
import Image from "next/image";
import type { Work } from "@/app/works/page"; 

export const Works = async () => {
  const { contents } = await client.get<{ contents: Work[] }>({
    endpoint: "works",
  });

  return (
    <section id="works" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Works</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contents.map((work) => (
            <li
              key={work.id}
              className="bg-black rounded-lg shadow-md overflow-hidden"
            >
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
                <p className="mt-0 p-4 text-lg font-semibold">{work.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
