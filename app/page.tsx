import Image from "next/image";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { Skill } from "./_components/Skill";
import { Project } from "./_components/Project";

export default function Home() {
  return (
   <main>
    <Header />
    <Spacing size ="md" />
    <Hero />
    <Spacing size ="md"/>
    <Skill />
    <Spacing size="md"/>
    <Project />
   </main>
  );
}
