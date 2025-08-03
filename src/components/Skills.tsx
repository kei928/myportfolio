import { client } from "@/libs/client";
import Image from "next/image";

type Skill = {
  id: string;
  name: string;
  logo: {
    url: string;
  };
};

export const Skills = async () => {
  const { contents } = await client.get<{ contents: Skill[] }>({
    endpoint: "skills",
  });

  return (
    <section id="skills" className="py-20 bg-[#1e1e1e]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl text-[#d4d4d4] font-bold mb-12">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {contents.map((skill) => (
            <li key={skill.id} className="flex flex-col items-center gap-2">
              <Image
                src={skill.logo.url}
                width={64}
                height={64}
                alt={skill.name}
              />
              <p className="font-semibold text-[#d4d4d4]">{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
