import Image from "next/image";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { Skill } from "./_components/Skill";
import { Project } from "./_components/Project";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import { TracingBeam } from "@/components/ui/tracing-beam";


export default function Home() {
  return (

   <main>
    <TracingBeam  >
    <Header />
    <Spacing size ="md" />


    <Hero />
    <Spacing size ="md"/>
    <Spacing size ="md"/>
    <Skill />
    <Spacing size="md"/>
    <Spacing size="md"/>
    <Project />
    </TracingBeam>
    <Spacing size='md' />
    <Spacing size='md' />
    <Contact />
    <Spacing size='md' />
    <Spacing size='sm' />
    <Footer />
   </main>
  );
}
