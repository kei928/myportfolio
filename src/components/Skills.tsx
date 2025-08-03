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
    <section id="skills" className="py-20">
      <div className="container mx-auto text-center bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl text-slate-700 font-bold mb-12">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {contents.map((skill) => (
            <li key={skill.id} className="flex flex-col items-center gap-2 text-slate-700">
              <Image src={skill.logo.url} width={64} height={64} alt={skill.name} />
              <p className="font-semibold">{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};