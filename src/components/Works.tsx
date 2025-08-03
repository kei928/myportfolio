import { client } from "@/libs/client";
import Link from "next/link";
import Image from "next/image";
import type { Work } from "@/app/works/page"; 

export const Works = async () => {
  const { contents } = await client.get<{ contents: Work[] }>({
    endpoint: "works",
  });

  return (
    <section id="works" className="py-20 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Works</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contents.map((work) => (
            <li
              key={work.id}
              className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl"
            >
              <Link href={`/works/${work.id}`} className="block group">
                {work.thumbnail && (
                  <Image
                    src={work.thumbnail.url}
                    width={work.thumbnail.width}
                    height={work.thumbnail.height}
                    alt=""
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
                <p className="p-4 text-lg text-center font-semibold bg-gray-100">{work.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
