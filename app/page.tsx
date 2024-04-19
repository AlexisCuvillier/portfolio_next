import Image from "next/image";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { Skill } from "./_components/Skill";
import { Project } from "./_components/Project";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";


export default function Home() {
  return (

   <main>
    <Header />
    <Spacing size ="md" />
    <Hero />
    <Spacing size ="md"/>
    <Spacing size ="md"/>
    <Skill />
    <Spacing size="md"/>
    <Spacing size="md"/>
    <Project />
    <Spacing size='md' />
    <Spacing size='md' />
    <Contact />
    <Spacing size='md' />
    <Footer />
   </main>
  );
}
