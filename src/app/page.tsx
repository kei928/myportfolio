import { client } from "@/libs/client";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Works } from "@/components/Works";
import { Contact } from "@/components/Contact";


export default async function Home() {

  return (
    <>
      <Hero /> 
      <About />
      <Skills />
      <Works />
      <Contact />
    </>
  );
}
