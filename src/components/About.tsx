import { client } from "@/libs/client";
import Image from "next/image";

type Profile = {
  name: string;
  bio: string;
  avatar: {
    url: string;
    height: number;
    width: number;
  };
};

export const About = async () => {
  const profile = await client.get<Profile>({ endpoint: "profile" });

  return (
    <section id="about" className="py-20 md:py-32 bg-[#252526]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#d4d4d4] mb-8">About Me</h2>
        <Image
          src={profile.avatar.url}
          width={120}
          height={120}
          alt="avatar"
          className="rounded-full inline-block"
        />
        <h3 className="text-2xl font-semibold text-[#d4d4d4] mt-4">
          {profile.name}
        </h3>
        <div
          dangerouslySetInnerHTML={{ __html: profile.bio }}
          className="prose prose-invert mt-4 mx-auto"
        />
      </div>
    </section>
  );
};
