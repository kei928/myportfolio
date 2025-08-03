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

export default async function AboutPage() {
  const profile = await client.get<Profile>({ endpoint: "profile" });

  return (
    <div>
      <h1 className="text-2xl font-bold">About Me</h1>
      <div className="mt-8 text-center">
        <Image
          src={profile.avatar.url}
          width={120}
          height={120}
          alt="avatar"
          className="rounded-full inline-block"
        />
        <h2 className="text-xl font-semibold mt-4">{profile.name}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: profile.bio }}
          className="prose mt-4 mx-auto"
        />
      </div>
    </div>
  );
}